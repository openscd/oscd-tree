import { __decorate } from "tslib";
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import { ref } from 'lit/directives/ref.js';
import '@material/mwc-icon';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-textfield';
/** @returns the depth of `t` if an object or array, zero otherwise. */
function depth(t, mem = new WeakSet()) {
    if (mem.has(t))
        return Infinity;
    switch (t === null || t === void 0 ? void 0 : t.constructor) {
        case Object:
        case Array:
            mem.add(t);
            return (1 +
                Math.max(-1, ...Object.values(t).map(_ => depth(_, mem))));
        default:
            return 0;
    }
}
function getColumns(rows, count) {
    return new Array(count)
        .fill(0)
        .map((_c, c) => new Array(rows.length)
        .fill(0)
        .map((_r, r) => c < rows[r].length ? rows[r].slice(0, c + 1) : undefined));
}
const waitingColumn = html `<mwc-list
  ><mwc-list-item noninteractive hasMeta
    ><mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
  ></mwc-list
>`;
const placeholderCell = html `<mwc-list-item noninteractive></mwc-list-item>`;
function samePath(a, b) {
    if (a.length !== (b === null || b === void 0 ? void 0 : b.length))
        return false;
    return a.every((x, i) => b[i] === x);
}
let OscdTree = class OscdTree extends LitElement {
    constructor() {
        super(...arguments);
        this.selection = {};
        this.multi = false;
        this.read = async (path) => ({
            path,
            entries: [],
        });
        this.loaded = Promise.resolve();
        this.collapsed = new Set();
    }
    get depth() {
        return depth(this.selection);
    }
    get paths() {
        return this.getPaths();
    }
    set paths(paths) {
        const selection = {};
        for (const path of paths) {
            let i = selection;
            for (const name of path) {
                if (!Object.prototype.hasOwnProperty.call(i, name))
                    i[name] = {};
                i = i[name];
            }
        }
        this.selection = selection;
    }
    get path() {
        var _a;
        return (_a = this.paths[0]) !== null && _a !== void 0 ? _a : [];
    }
    set path(path) {
        this.paths = [path];
    }
    get filterRegex() {
        return new RegExp(this.searchUI.value, 'iu');
    }
    get filter() {
        return this.searchUI.value;
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    isMandatory(path) {
        return false;
    }
    getText(path) {
        var _a;
        return (_a = path[path.length - 1]) !== null && _a !== void 0 ? _a : '';
    }
    async rows() {
        const dirs = await Promise.all([
            this.read([]),
            ...new Array(this.depth)
                .fill(0)
                .map((_, i) => i)
                .flatMap(i => this.getPaths(i).map(p => this.read(p))),
        ]);
        const rs = dirs.flatMap(({ path, entries }) => entries.map(e => path.concat([e])));
        return rs
            .filter(r => !rs.some(r2 => r2.length > r.length && r.every((s, i) => r2[i] === s)))
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
    getPaths(maxLength) {
        let paths = Object.keys(this.selection).map(key => [key]);
        let i = maxLength !== null && maxLength !== void 0 ? maxLength : this.depth - 1;
        while (i > 0) {
            i -= 1;
            paths = paths.flatMap(path => {
                let dir = this.selection;
                for (const slug of path)
                    dir = dir[slug]; // recursive descent
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
    toggleCollapse(serializedPath) {
        if (this.collapsed.has(serializedPath))
            this.collapsed.delete(serializedPath);
        else
            this.collapsed.add(serializedPath);
        this.requestUpdate();
    }
    multiSelect(event, path, clicked) {
        let dir = this.selection;
        for (const slug of path)
            dir = dir[slug]; // recursive descent
        if (dir && dir[clicked])
            delete dir[clicked];
        // deselect if selected
        else
            dir[clicked] = {}; // select otherwise
    }
    singleSelect(event, path, clicked) {
        if (this.path[path.length] === clicked)
            this.path = path;
        // deselect if selected
        else
            this.path = path.concat(clicked); // select otherwise
    }
    async select(event) {
        var _a;
        const clicked = event.target.selected;
        const selectedValue = clicked === null || clicked === void 0 ? void 0 : clicked.value;
        if (!selectedValue)
            return;
        if (selectedValue === 'selectAll') {
            const items = Array.from(clicked.closest('mwc-list').children);
            if (!(items === null || items === void 0 ? void 0 : items.length))
                return;
            const selected = items
                .slice(1)
                .some(item => !item.activated &&
                !item.noninteractive &&
                !item.disabled);
            items.forEach(item => {
                if (selected !== item.activated)
                    item.dispatchEvent(new CustomEvent('request-selected', {
                        bubbles: true,
                        composed: true,
                        detail: { source: 'interaction', selected },
                    }));
            });
            return;
        }
        const path = JSON.parse((_a = clicked.dataset.path) !== null && _a !== void 0 ? _a : '[]');
        if (this.multi)
            this.multiSelect(event, path, selectedValue);
        else
            this.singleSelect(event, path, selectedValue);
        this.requestUpdate();
        await this.updateComplete;
        await new Promise(resolve => {
            setTimeout(resolve, 250);
        });
        this.container.scrollLeft = 1000 * this.depth;
    }
    async renderCell(path, previousPath = []) {
        let defaultSelected = false;
        const afterRender = (item) => {
            if (!item)
                defaultSelected = false;
            if (defaultSelected || !item)
                return;
            defaultSelected = true;
            if (this.isMandatory(path)) {
                if (this.multi) {
                    let dir = this.selection;
                    for (const slug of path.slice(0, -1))
                        dir = dir[slug]; // rec. descent
                    if (dir[path[path.length - 1]])
                        return;
                    dir[path[path.length - 1]] = {};
                    this.requestUpdate('selection');
                }
                else {
                    const selection = {};
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
        let icon = '';
        if (expandable)
            if (activated)
                icon = 'expand_less';
            else
                icon = 'expand_more';
        else if (activated)
            icon = 'remove';
        else
            icon = 'add';
        if (disabled)
            if (collapsed)
                icon = 'more_vert';
            else
                icon = '';
        if (noninteractive)
            icon = 'subdirectory_arrow_right';
        return html `<mwc-list-item
      value="${entry}"
      data-path=${JSON.stringify(parent)}
      hasMeta
      ?activated=${activated}
      ?disabled=${disabled}
      ?noninteractive=${noninteractive}
      style="${noninteractive ? 'opacity: 0.38' : ''}"
      ${ref(afterRender)}
      >${icon
            ? html `<mwc-icon slot="meta">${icon}</mwc-icon>`
            : html ``}${this.getText(path)}</mwc-list-item
    >`;
    }
    renderColumn(column) {
        const items = [];
        if (column.length === 0 || column.every(p => p === undefined))
            return html ``;
        for (let i = 0; i < column.length; i += 1) {
            const path = column[i];
            items.push(path
                ? html `${until(this.renderCell(column[i], column[i - 1]), placeholderCell)}`
                : placeholderCell);
        }
        return html `<mwc-list
      @selected=${(e) => this.select(e)}
      >${this.multi
            ? html `<mwc-list-item hasMeta value="selectAll"
            ><mwc-icon slot="meta">done_all</mwc-icon></mwc-list-item
          >`
            : placeholderCell}${items}</mwc-list
    >`;
    }
    renderExpandCell(path) {
        const needle = JSON.stringify(path);
        if (!this.collapsed.has(needle))
            return placeholderCell;
        if (!path.length)
            return placeholderCell;
        return html `<mwc-list-item class="filter" data-path="${needle}" hasMeta
      ><mwc-icon slot="meta">unfold_more</mwc-icon></mwc-list-item
    >`;
    }
    renderCollapseCell(path) {
        const needle = JSON.stringify(path.slice(0, -1));
        if (path.length < 2)
            return placeholderCell;
        return html `<mwc-list-item class="filter" data-path="${needle}" hasMeta
      ><mwc-icon slot="meta">unfold_less</mwc-icon></mwc-list-item
    >`;
    }
    renderExpandColumn(rows) {
        return html `
      <mwc-list
        class="expand"
        @selected=${(e) => {
            const { path } = e.target.selected.dataset;
            if (path)
                this.toggleCollapse(path);
        }}
        >${placeholderCell}${rows.map(p => this.renderExpandCell(p))}</mwc-list
      >
    `;
    }
    renderCollapseColumn(rows) {
        return html `<mwc-list
      class="collapse"
      @selected=${(e) => {
            const { path } = e.target.selected.dataset;
            if (path)
                this.toggleCollapse(path);
        }}
      >${placeholderCell}${rows.map(p => this.renderCollapseCell(p))}</mwc-list
    >`;
    }
    async renderColumns() {
        const rows = await this.rows();
        const cols = getColumns(rows, this.depth + 1);
        const columns = cols.map(c => this.renderColumn(c));
        return html `${cols.length > 1
            ? this.renderCollapseColumn(rows)
            : ''}${columns.map(column => until(column, waitingColumn))}${this.renderExpandColumn(rows)}`;
    }
    render() {
        return html `<aside>
      <h3>Template Generator POC</h3>
        <button
        @click=${() => {
            const blob = new Blob([JSON.stringify(this.selection, null, '  ')], {
                type: 'application/json',
            });
            const a = document.createElement('a');
            a.download = 'selection.json';
            a.href = URL.createObjectURL(blob);
            a.dataset.downloadurl = ['application/xml', a.download, a.href].join(':');
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
        <input @click=${(event) => {
            event.target.value = '';
        }} @change=${async (event) => {
            var _a, _b, _d;
            const file = (_d = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.item(0)) !== null && _d !== void 0 ? _d : false;
            if (!file)
                return;
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
        ${ref(elm => elm === null || elm === void 0 ? void 0 : elm.setAttribute('icon', elm.value ? 'saved_search' : 'search'))}
        label="Regular Expression"
        @input=${() => this.requestUpdate('filter')}
      ></mwc-textfield
    >
      <div class="pane">${until(this.renderColumns(), waitingColumn)}</div>`;
    }
};
OscdTree.styles = css `
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
__decorate([
    property({ type: Object, reflect: true })
], OscdTree.prototype, "selection", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], OscdTree.prototype, "multi", void 0);
__decorate([
    property({ type: Number, reflect: true })
], OscdTree.prototype, "depth", null);
__decorate([
    property({ type: Array, reflect: true })
], OscdTree.prototype, "paths", null);
__decorate([
    property({ type: Array, reflect: true })
], OscdTree.prototype, "path", null);
__decorate([
    property({ attribute: false })
], OscdTree.prototype, "read", void 0);
__decorate([
    property({ attribute: false })
], OscdTree.prototype, "loaded", void 0);
__decorate([
    property({ type: String })
], OscdTree.prototype, "filter", null);
__decorate([
    query('#selection-input')
], OscdTree.prototype, "selectionInputUI", void 0);
__decorate([
    query('mwc-textfield')
], OscdTree.prototype, "searchUI", void 0);
__decorate([
    query('div')
], OscdTree.prototype, "container", void 0);
OscdTree = __decorate([
    customElement('oscd-tree')
], OscdTree);
export { OscdTree };
//# sourceMappingURL=oscd-tree.js.map