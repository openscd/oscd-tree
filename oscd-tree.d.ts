import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-textfield';
import type { TextField } from '@material/mwc-textfield';
import type { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';
export type Selection = {
    [name: string]: Selection;
};
export type Path = string[];
export interface Directory {
    path: Path;
    entries: string[];
}
export declare class OscdTree extends LitElement {
    selection: Selection;
    multi: boolean;
    get depth(): number;
    get paths(): Path[];
    set paths(paths: Path[]);
    get path(): Path;
    set path(path: Path);
    read: (path: Path) => Promise<Directory>;
    loaded: Promise<void>;
    get filterRegex(): RegExp;
    get filter(): string;
    isMandatory(path: string[]): boolean;
    getText(path: string[]): string;
    selectionInputUI: HTMLInputElement;
    searchUI: TextField;
    container: Element;
    private collapsed;
    private rows;
    private getPaths;
    private toggleCollapse;
    multiSelect(event: SingleSelectedEvent, path: Path, clicked: string): void;
    singleSelect(event: SingleSelectedEvent, path: Path, clicked: string): void;
    select(event: SingleSelectedEvent): Promise<void>;
    renderCell(path: Path, previousPath?: Path): Promise<TemplateResult>;
    renderColumn(column: (Path | undefined)[]): TemplateResult;
    renderExpandCell(path: Path): TemplateResult;
    renderCollapseCell(path: Path): TemplateResult;
    renderExpandColumn(rows: Path[]): TemplateResult;
    renderCollapseColumn(rows: Path[]): TemplateResult;
    renderColumns(): Promise<TemplateResult>;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
