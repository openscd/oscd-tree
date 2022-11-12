import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';

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

const waitingList = html`<mwc-list
  ><mwc-list-item noninteractive hasMeta
    ><mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
  ></mwc-list
>`;

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

  async columns(): Promise<(Path | undefined)[][]> {
    const rows = await this.rows();
    return new Array(this.depth + 1)
      .fill(0)
      .map((_c, c) =>
        new Array(rows.length)
          .fill(0)
          .map((_r, r) =>
            c < rows[r].length ? rows[r].slice(0, c + 1) : undefined
          )
      );
  }

  @property({ attribute: false })
  read: (path: Path) => Promise<Directory> = async path => ({
    path,
    entries: [],
  });

  @property({ attribute: false })
  loaded: Promise<void> = Promise.resolve();

  @property({ type: String })
  get filter(): string {
    return this.searchUI.value;
  }

  /* eslint-disable class-methods-use-this */
  getTitle(path: string[]): string {
    return path.join('/');
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  getDisplayString(entry: string, path: string[]): string {
    return entry;
  }
  /* eslint-enable class-methods-use-this */

  @query('mwc-textfield[icon="search"]')
  searchUI!: TextField;

  @query('div')
  container!: Element;

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
      .filter(r => this.filter === '' || r.join(' ').includes(this.filter))
      .sort((r1, r2) => r1.join(' ').localeCompare(r2.join(' ')));
  }

  private getPaths(maxLength?: number): Path[] {
    let paths: Path[] = Object.keys(this.selection).map(key => [key]);

    let i = maxLength ?? this.depth - 1;
    while (i > 0) {
      i -= 1;
      paths = paths.flatMap(path => {
        let dir = this.selection;
        for (const entry of path) dir = dir[entry]; // recursive descent
        const newPaths = Object.keys(dir).map(entry => path.concat(entry));
        return newPaths.length === 0 ? [path] : newPaths;
      });
    }

    return maxLength === undefined
      ? paths
      : paths
          .filter(path => path.length > maxLength)
          .sort((p1, p2) => p1.join(' ').localeCompare(p2.join(' ')));
  }

  multiSelect(event: SingleSelectedEvent, path: Path, clicked: string): void {
    let dir = this.selection;
    for (const entry of path) dir = dir[entry]; // recursive descent

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
    const clicked = <ListItem & { dataPath: Path }>(
      (<List>event.target).selected
    );
    const selectedValue = clicked.value;
    const path = clicked.dataPath;

    if (this.multi) this.multiSelect(event, path, selectedValue);
    else this.singleSelect(event, path, selectedValue);

    this.requestUpdate();
    await this.updateComplete;
    await new Promise(resolve => {
      setTimeout(resolve, 250);
    });
    this.container.scrollLeft = 1000 * this.depth;
  }

  async renderEntry(
    path: Path,
    previousPath: Path = []
  ): Promise<TemplateResult> {
    const parent = path.slice(0, -1);
    const entry = path[path.length - 1];

    const activated = this.getPaths(parent.length)
      .map(p => JSON.stringify(p))
      .includes(JSON.stringify(path));
    const noninteractive = path.every((s, i) => previousPath[i] === s);

    const expandable = (await this.read(path)).entries.length > 0;
    const iconDirection = expandable ? 'right' : 'left';
    const iconType = activated ? 'arrow' : 'chevron';
    const icon = `${iconType}_${iconDirection}`;
    return html`<mwc-list-item
      value="${entry}"
      .dataPath=${parent}
      hasMeta
      ?activated=${activated}
      ?noninteractive=${noninteractive}
      style="${noninteractive ? 'opacity: 0.38' : ''}"
      ><mwc-icon slot="meta">${icon}</mwc-icon>${this.getDisplayString(
        entry,
        parent
      )}</mwc-list-item
    >`;
  }

  async renderColumn(column: (Path | undefined)[]): Promise<TemplateResult> {
    const items: TemplateResult[] = [];
    const placeholder = html`<mwc-list-item noninteractive></mwc-list-item>`;

    for (let i = 0; i < column.length; i += 1) {
      const path = column[i];
      items.push(
        path
          ? html`${until(
              this.renderEntry(column[i]!, column[i - 1]),
              placeholder
            )}`
          : placeholder
      );
    }

    if (items.length === 0) return html``;
    return html`<mwc-list
      @selected=${(e: SingleSelectedEvent) => this.select(e)}
      >${items}</mwc-list
    >`;
  }

  async renderColumns(): Promise<TemplateResult> {
    const cols = await this.columns();
    const columns = cols.map(c => this.renderColumn(c));

    return html`${columns.map(column => until(column, waitingList))}`;
  }

  render(): TemplateResult {
    return html`<mwc-textfield
        style="--mdc-shape-small: 28px;"
        outlined
        icon="search"
        @input=${() => this.requestUpdate('filter')}
      ></mwc-textfield>
      <div class="pane">${until(this.renderColumns(), waitingList)}</div>`;
  }

  static styles = css`
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
  `;
}
