import { TemplateResult } from 'lit';
import type { Directory, Path } from '../oscd-tree.js';
import '../oscd-tree.js';
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        multi: {
            type: string;
            defaultValue: boolean;
            required: boolean;
            control: string;
        };
        path: {
            type: string;
            defaultValue: never[];
            required: boolean;
            control: string;
        };
        paths: {
            type: string;
            defaultValue: never[];
            required: boolean;
            control: string;
        };
    };
};
export default _default;
interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
type ArgTypes = {
    multi?: boolean;
    paths?: Path[];
    path?: Path;
    read: (path: Path) => Promise<Directory>;
    isMandatory: (path: Path) => boolean;
};
export declare const Regular: Story<ArgTypes>;
export declare const SingleSelectWithPath: Story<ArgTypes>;
export declare const MultiSelectWithPaths: Story<ArgTypes>;
