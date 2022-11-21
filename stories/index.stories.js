import { html } from 'lit';
import '../oscd-tree.js';
export default {
    title: 'oscd-tree',
    component: 'oscd-tree',
    argTypes: {
        multi: {
            type: 'boolean',
            defaultValue: false,
            required: false,
            control: 'boolean',
        },
        path: {
            type: 'array',
            defaultValue: [],
            required: false,
            control: 'array',
        },
        paths: {
            type: 'array',
            defaultValue: [],
            required: false,
            control: 'object',
        },
    },
};
const data = await fetch('data.json').then(r => r.json());
async function nsdRead(path) {
    let dir = data;
    for (const slug of path)
        dir = dir[slug].dependencies;
    return { path, entries: Object.keys(dir) };
}
function nsdIsMandatory(path) {
    let dir = data;
    for (const slug of path.slice(0, -1))
        dir = dir[slug].dependencies;
    return dir[path[path.length - 1]].mandatory;
}
const Template = ({ multi = false, path = [], paths = [[]], read = nsdRead, isMandatory = nsdIsMandatory, }) => multi
    ? html `<oscd-tree
        multi
        .paths=${paths}
        .read=${read}
        .isMandatory=${isMandatory}
      ></oscd-tree>`
    : html `
        <oscd-tree
          .path=${path}
          .read=${read}
          .isMandatory=${isMandatory}
        ></oscd-tree>
      `;
export const Regular = Template.bind({});
export const SingleSelectWithPath = Template.bind({});
SingleSelectWithPath.args = {
    path: ['MMXU', 'A', 'phsA', 'cVal', 'mag', 'i'],
};
export const MultiSelectWithPaths = Template.bind({});
MultiSelectWithPaths.args = {
    multi: true,
    paths: [
        ['MMXU', 'A', 'phsA', 'cVal', 'mag', 'i'],
        ['MMXU', 'A', 'phsA', 'cVal', 'ang', 'i'],
    ],
};
//# sourceMappingURL=index.stories.js.map