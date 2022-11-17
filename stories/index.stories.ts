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
  isMandatory: (path: Path) => boolean;
};

const Template: Story<ArgTypes> = ({
  multi = false,
  path = [],
  paths = [[]],
  read = async p => {
    if (!p.length) return { path: p, entries: ['root 1', 'root 2'] };
    if (p.length === 3)
      return {
        path: p,
        entries: ['option o', 'alternative a', 'required r', 'choice c'],
      };
    if (p.length > 3) return { path: p, entries: [] };
    return {
      path: p,
      entries: ['option O', 'required R', 'choice C'],
    };
  },
  isMandatory = p => (p[p.length - 1] ?? '').includes('required'),
}: ArgTypes) =>
  multi
    ? html`<oscd-tree
        multi
        .paths=${paths}
        .read=${read}
        .isMandatory=${isMandatory}
      ></oscd-tree>`
    : html`
        <oscd-tree
          .path=${path}
          .read=${read}
          .isMandatory=${isMandatory}
        ></oscd-tree>
      `;

export const Regular = Template.bind({});

export const SingleSelectWithPath = Template.bind({});
SingleSelectWithPath.args = {
  path: ['root 2', 'choice C', 'option O', 'choice c'],
};

export const MultiSelectWithPaths = Template.bind({});
MultiSelectWithPaths.args = {
  multi: true,
  paths: [
    ['root 2', 'choice C', 'option O', 'choice c'],
    ['root 1', 'option O', 'choice C', 'alternative a'],
  ],
};
