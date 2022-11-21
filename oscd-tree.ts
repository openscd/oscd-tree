/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import { ref } from 'lit/directives/ref.js';

import '@material/mwc-icon';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-textfield';
import type { TextField } from '@material/mwc-textfield';
import type { List } from '@material/mwc-list';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';

export type Selection = { [name: string]: Selection };

export type Path = string[];
export interface Directory {
  path: Path;
  entries: string[];
}

/** @returns the depth of `t` if an object or array, zero otherwise. */
function depth(t: Record<string, unknown>, mem = new WeakSet()): number {
  if (mem.has(t)) return Infinity;
  switch (t?.constructor) {
    case Object:
    case Array:
      mem.add(t);
      return (
        1 +
        Math.max(
          -1,
          ...Object.values(t).map(_ => depth(<Record<string, unknown>>_, mem))
        )
      );
    default:
      return 0;
  }
}

function getColumns(rows: Path[], count: number): (Path | undefined)[][] {
  return new Array(count)
    .fill(0)
    .map((_c, c) =>
      new Array(rows.length)
        .fill(0)
        .map((_r, r) =>
          c < rows[r].length ? rows[r].slice(0, c + 1) : undefined
        )
    );
}

const waitingColumn = html`<mwc-list
  ><mwc-list-item noninteractive hasMeta
    ><mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
  ></mwc-list
>`;
const placeholderCell = html`<mwc-list-item noninteractive></mwc-list-item>`;

function samePath(a: Path, b?: Path): boolean {
  if (a.length !== b?.length) return false;
  return a.every((x, i) => b[i] === x);
}

@customElement('oscd-tree')
export class OscdTree extends LitElement {
  @property({ type: Object, reflect: true })
  selection: Selection = {};

  @property({ type: Boolean, reflect: true })
  multi = false;

  @property({ type: Number, reflect: true })
  get depth(): number {
    return depth(this.selection);
  }

  @property({ type: Array, reflect: true })
  get paths(): Path[] {
    return this.getPaths();
  }

  set paths(paths: Path[]) {
    const selection: Selection = {};
    for (const path of paths) {
      let i = selection;
      for (const name of path) {
        if (!Object.prototype.hasOwnProperty.call(i, name)) i[name] = {};
        i = i[name];
      }
    }
    this.selection = selection;
  }

  @property({ type: Array, reflect: true })
  get path(): Path {
    return this.paths[0] ?? [];
  }

  set path(path: Path) {
    this.paths = [path];
  }

  @property({ attribute: false })
  read: (path: Path) => Promise<Directory> = async path => ({
    path,
    entries: [],
  });

  @property({ attribute: false })
  loaded: Promise<void> = Promise.resolve();

  get filterRegex(): RegExp {
    return new RegExp(this.searchUI.value, 'iu');
  }

  @property({ type: String })
  get filter(): string {
    return this.searchUI.value;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  isMandatory(path: string[]): boolean {
    return false;
  }

  getText(path: string[]): string {
    return path[path.length - 1] ?? '';
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  @query('#selection-input') selectionInputUI!: HTMLInputElement;

  @query('mwc-textfield[icon="search"]')
  searchUI!: TextField;

  @query('div')
  container!: Element;

  private collapsed = new Set<string>();

  private async rows(): Promise<Path[]> {
    const dirs = await Promise.all([
      this.read([]),
      ...new Array(this.depth)
        .fill(0)
        .map((_, i) => i)
        .flatMap(i => this.getPaths(i).map(p => this.read(p))),
    ]);
    const rs: Path[] = dirs.flatMap(({ path, entries }) =>
      entries.map(e => path.concat([e]))
    );
    return rs
      .filter(
        r =>
          !rs.some(r2 => r2.length > r.length && r.every((s, i) => r2[i] === s))
      )
      .filter(r => this.filter === '' || r.join(' ').match(this.filterRegex))
      .map(r => {
        for (let i = r.length - 1; i > 0; i -= 1)
          if (this.collapsed.has(JSON.stringify(r.slice(0, -i))))
            return r.slice(0, -i);
        return r;
      })
      .sort((r1, r2) => r1.join(' ').localeCompare(r2.join(' ')))
      .filter((x, i, xs) => !samePath(x, xs[i - 1]));
  }

  private getPaths(maxLength?: number): Path[] {
    let paths: Path[] = Object.keys(this.selection).map(key => [key]);

    let i = maxLength ?? this.depth - 1;
    while (i > 0) {
      i -= 1;
      paths = paths.flatMap(path => {
        let dir = this.selection;
        for (const slug of path) dir = dir[slug]; // recursive descent
        const newPaths = Object.keys(dir).map(slug => path.concat(slug));
        return newPaths.length === 0 ? [path] : newPaths;
      });
    }

    return maxLength === undefined
      ? paths
      : paths
          .filter(path => path.length > maxLength)
          .sort((p1, p2) => p1.join(' ').localeCompare(p2.join(' ')));
  }

  private toggleCollapse(serializedPath: string) {
    if (this.collapsed.has(serializedPath))
      this.collapsed.delete(serializedPath);
    else this.collapsed.add(serializedPath);
    this.requestUpdate();
  }

  multiSelect(event: SingleSelectedEvent, path: Path, clicked: string): void {
    let dir = this.selection;
    for (const slug of path) dir = dir[slug]; // recursive descent

    if (dir && dir[clicked]) delete dir[clicked];
    // deselect if selected
    else dir[clicked] = {}; // select otherwise
  }

  singleSelect(event: SingleSelectedEvent, path: Path, clicked: string): void {
    if (this.path[path.length] === clicked) this.path = path;
    // deselect if selected
    else this.path = path.concat(clicked); // select otherwise
  }

  async select(event: SingleSelectedEvent): Promise<void> {
    const clicked = <ListItem>(<List>event.target).selected;
    const selectedValue = clicked?.value;
    if (!selectedValue) return;
    if (selectedValue === 'selectAll') {
      const items = Array.from(clicked!.closest('mwc-list')!.children);
      if (!items?.length) return;
      const selected = items
        .slice(1)
        .some(
          item =>
            !(item as ListItem).activated &&
            !(item as ListItem).noninteractive &&
            !(item as ListItem).disabled
        );
      items.forEach(item => {
        if (selected !== (item as ListItem).activated)
          item.dispatchEvent(
            new CustomEvent('request-selected', {
              bubbles: true,
              composed: true,
              detail: { source: 'interaction', selected },
            })
          );
      });
      return;
    }
    const path = JSON.parse(clicked.dataset.path ?? '[]') as Path;

    if (this.multi) this.multiSelect(event, path, selectedValue);
    else this.singleSelect(event, path, selectedValue);

    this.requestUpdate();
    await this.updateComplete;
    await new Promise(resolve => {
      setTimeout(resolve, 250);
    });
    this.container.scrollLeft = 1000 * this.depth;
  }

  async renderCell(
    path: Path,
    previousPath: Path = []
  ): Promise<TemplateResult> {
    let defaultSelected = false;
    const afterRender = (item?: Element) => {
      if (!item) defaultSelected = false;
      if (defaultSelected || !item) return;
      defaultSelected = true;
      if (this.isMandatory(path)) {
        if (this.multi) {
          let dir = this.selection;
          for (const slug of path.slice(0, -1)) dir = dir[slug]; // rec. descent
          if (dir[path[path.length - 1]]) return;
          dir[path[path.length - 1]] = {};
          this.requestUpdate('selection');
        } else {
          const selection: Selection = {};
          let dir = selection;
          for (const slug of path) {
            dir[slug] = {};
            dir = dir[slug];
          }
          if (depth(selection) > depth(this.selection))
            this.selection = selection;
        }
      }
    };

    const parent = path.slice(0, -1);
    const entry = path[path.length - 1];

    const activated = this.getPaths(parent.length)
      .map(p => JSON.stringify(p))
      .includes(JSON.stringify(path));
    const noninteractive = path.every((s, i) => previousPath[i] === s);
    const disabled = this.isMandatory(path);

    const collapsed = this.collapsed.has(JSON.stringify(path));
    const expandable = (await this.read(path)).entries.length > 0;
    const iconDirection = expandable ? 'right' : 'left';
    const iconType = activated ? 'chevron' : 'arrow';
    const icon = `${iconType}_${iconDirection}`;
    return html`<mwc-list-item
      value="${entry}"
      data-path=${JSON.stringify(parent)}
      hasMeta
      ?activated=${activated}
      ?disabled=${disabled}
      ?noninteractive=${noninteractive}
      style="${noninteractive ? 'opacity: 0.38' : ''}"
      ${ref(afterRender)}
      >${(disabled || noninteractive) && !collapsed
        ? html``
        : html`<mwc-icon slot="meta"
            >${collapsed ? 'more_horiz' : icon}</mwc-icon
          >`}${this.getText(path)}</mwc-list-item
    >`;
  }

  renderColumn(column: (Path | undefined)[]): TemplateResult {
    const items: TemplateResult[] = [];

    if (column.length === 0 || column.every(p => p === undefined))
      return html``;
    for (let i = 0; i < column.length; i += 1) {
      const path = column[i];
      items.push(
        path
          ? html`${until(
              this.renderCell(column[i]!, column[i - 1]),
              placeholderCell
            )}`
          : placeholderCell
      );
    }

    return html`<mwc-list
      @selected=${(e: SingleSelectedEvent) => this.select(e)}
      >${this.multi
        ? html`<mwc-list-item hasMeta value="selectAll"
            ><mwc-icon slot="meta">done_all</mwc-icon></mwc-list-item
          >`
        : placeholderCell}${items}</mwc-list
    >`;
  }

  renderExpandCell(path: Path): TemplateResult {
    const needle = JSON.stringify(path);
    if (!this.collapsed.has(needle)) return placeholderCell;
    if (!path.length) return placeholderCell;
    return html`<mwc-list-item class="filter" data-path="${needle}" hasMeta
      ><mwc-icon slot="meta">unfold_more</mwc-icon></mwc-list-item
    >`;
  }

  renderCollapseCell(path: Path): TemplateResult {
    const needle = JSON.stringify(path.slice(0, -1));
    if (path.length < 2) return placeholderCell;
    return html`<mwc-list-item class="filter" data-path="${needle}" hasMeta
      ><mwc-icon slot="meta">unfold_less</mwc-icon></mwc-list-item
    >`;
  }

  renderFilterColumns(rows: Path[]): TemplateResult {
    return html`<mwc-list
        class="collapse"
        @selected=${(e: SingleSelectedEvent) => {
          const { path } = (<ListItem>(<List>e.target).selected).dataset;
          if (path) this.toggleCollapse(path);
        }}
        >${placeholderCell}${rows.map(p =>
          this.renderCollapseCell(p)
        )}</mwc-list
      >
      <mwc-list
        class="expand"
        @selected=${(e: SingleSelectedEvent) => {
          const { path } = (<ListItem>(<List>e.target).selected).dataset;
          if (path) this.toggleCollapse(path);
        }}
        >${placeholderCell}${rows.map(p => this.renderExpandCell(p))}</mwc-list
      > `;
  }

  async renderColumns(): Promise<TemplateResult> {
    const rows = await this.rows();
    const cols = getColumns(rows, this.depth + 1);
    const columns = cols.map(c => this.renderColumn(c));

    return html`${columns.map(column =>
      until(column, waitingColumn)
    )}${this.renderFilterColumns(rows)}`;
  }

  render(): TemplateResult {
    return html`<aside>
      <h3>Template Generator POC</h3>
        <button
        @click=${() => {
          const blob = new Blob([JSON.stringify(this.selection, null, '  ')], {
            type: 'application/json',
          });

          const a = document.createElement('a');
          a.download = 'selection.json';
          a.href = URL.createObjectURL(blob);
          a.dataset.downloadurl = ['application/xml', a.download, a.href].join(
            ':'
          );
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => {
            URL.revokeObjectURL(a.href);
          }, 5000);
        }}
      >
        Save selection</button
      ><br>
      <form>
        <label for="selection-input">Load selection</label><br>
        <input @click=${(event: MouseEvent) => {
          (<HTMLInputElement>event.target).value = '';
        }} @change=${async (event: InputEvent) => {
      const file =
        (<HTMLInputElement | null>event.target)?.files?.item(0) ?? false;
      if (!file) return;

      this.selection = JSON.parse(await file.text());
      this.searchUI.value = this.depth ? ' ' : '';
      this.collapsed = new Set();
      this.selectionInputUI.onchange = null;
    }} id="selection-input" accept=".json" type="file"></input>
      </form>
    </aside>
      <mwc-textfield
        style="--mdc-shape-small: 28px;"
        outlined
        icon="search"
        label="Regular Expression"
        @input=${() => this.requestUpdate('filter')}
      ></mwc-textfield
    >
      <div class="pane">${until(this.renderColumns(), waitingColumn)}</div>`;
  }

  static styles = css`
    aside {
      display: flex;
      flex-direction: column;
      margin: 8px;
      padding-bottom: 8px;
      font-family: var(--mdc-typography-font-family, Roboto, sans-serif);
      font-size: 14px;
      color: var(--mdc-theme-text-primary-on-background);
      width: min-content;
    }

    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    h2 {
      font-family: var(--mdc-typography-font-family, Roboto, sans-serif);
      font-weight: 300;
      color: var(--mdc-theme-primary);
    }

    section {
      display: flex;
      flex-direction: column;
      width: max-content;
    }

    section > mwc-list {
      margin-top: 76px;
    }

    a {
      font-weight: 600;
      font-variant: small-caps;
      text-transform: lowercase;
      text-decoration: none;
      color: var(--mdc-theme-primary);
    }

    a:link {
      color: var(--mdc-theme-error);
    }

    a:visited {
      color: var(--mdc-theme-secondary);
    }

    mwc-list-item.filter {
      color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
    }
  `;
}
