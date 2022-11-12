import { html, TemplateResult } from 'lit';

import type { Directory, Path } from '../oscd-tree.js';
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
    selection: {
      type: 'object',
      defaultValue: {},
      required: false,
      control: 'array',
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
};

const Template: Story<ArgTypes> = ({
  multi = false,
  path = [],
  paths = [[]],
  read = async p => {
    if (!p.length) return { path: p, entries: ['root 1', 'root 2'] };
    const whose = (c: string) => `${p[p.length - 1].at(-1)}'s ${c}`;
    if (p.length === 3)
      return { path: p, entries: ['leaf 1', 'leaf 2', 'leaf 3'].map(whose) };
    if (p.length > 3) return { path: p, entries: [] };
    return {
      path: p,
      entries: ['child 1', 'child 2', 'child 3'].map(whose),
    };
  },
}: ArgTypes) =>
  multi
    ? html`<oscd-tree multi .paths=${paths} .read=${read}></oscd-tree>`
    : html` <oscd-tree .path=${path} .read=${read}></oscd-tree> `;

export const Regular = Template.bind({});

export const CustomPath = Template.bind({});
CustomPath.args = {
  path: ['root 2', "2's child 2", "2's child 3", "3's leaf 1"],
};

export const CustomPaths = Template.bind({});
CustomPaths.args = {
  multi: true,
  paths: [
    ['root 2', "2's child 2", "2's child 3"],
    ['root 1', "1's child 3", "3's child 1", "1's leaf 2"],
  ],
};
