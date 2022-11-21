import { css, html, LitElement } from 'lit';

import './oscd-tree.js';

const data = await fetch(new URL('./data.json', import.meta.url)).then(res =>
  res.json()
);

async function read(path: string[]) {
  let dir = data;
  for (const slug of path) dir = dir[slug].dependencies;

  return { path, entries: Object.keys(dir) };
}

function isMandatory(path: string[]) {
  let dir = data;
  for (const slug of path.slice(0, -1)) dir = dir[slug].dependencies;
  return dir[path[path.length - 1]].mandatory;
}

export default class OscdDataTypePOC extends LitElement {
  render() {
    return html`<div>
      <oscd-tree .read=${read} .isMandatory=${isMandatory} multi></oscd-tree>
    </div>`;
  }

  static styles = css`
    div {
      margin: 16px;
    }
  `;
}
