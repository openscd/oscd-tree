import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import type { OscdTree } from './oscd-tree.js';
import './oscd-tree.js';

describe('oscd-tree', () => {
  it('can override the path via attribute', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree path='["1", "2", "3"]'></oscd-tree>`
    );

    expect(el.path).to.deep.equal(['1', '2', '3']);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OscdTree>(html`<oscd-tree></oscd-tree>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
