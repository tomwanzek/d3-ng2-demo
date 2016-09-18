import { D3Ng2DemoPage } from './app.po';

import { browser } from 'protractor/globals';

describe('d3-ng2-demo App', function () {
  let page: D3Ng2DemoPage;

  beforeEach(() => {
    page = new D3Ng2DemoPage();
  });

  it('should display message saying Visual Power at Scale?', () => {
    // HACK: to avoid synchronization error
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Visual Power at Scale?');
  });

  it('should have one svg with dimensions 960x600 in app-brush-zoom-2 component', () => {
    // HACK: to avoid synchronization error
    browser.ignoreSynchronization = true;
    page.navigateTo();
    let svg = page.getComponentElement('app-brush-zoom-2', 'svg');
    expect(svg.count()).toEqual(1);
    expect(svg.getAttribute('width')).toEqual('960');
    expect(svg.getAttribute('height')).toEqual('600');

  });

  it('should have one svg with dimensions 400x400 in app-drag-zoom-2 component', () => {
    // HACK: to avoid synchronization error
    browser.ignoreSynchronization = true;
    page.navigateTo();
    let svg = page.getComponentElement('app-drag-zoom-2', 'svg');
    expect(svg.count()).toEqual(1);
    expect(svg.getAttribute('width')).toEqual('400');
    expect(svg.getAttribute('height')).toEqual('400');

  });

  it('should have one canvas with dimensions 400x400 in app-voronoi-spirals-3 component', () => {
    // HACK: to avoid synchronization error
    browser.ignoreSynchronization = true;
    page.navigateTo();
    let svg = page.getComponentElement('app-voronoi-spirals-3', 'canvas');
    expect(svg.count()).toEqual(1);
    expect(svg.getAttribute('width')).toEqual('400');
    expect(svg.getAttribute('height')).toEqual('400');
  });

  it('should resize the layout of the Drag & Zoom II visual', () => {
    // HACK: to avoid synchronization error
    browser.ignoreSynchronization = true;
    page.navigateTo();
    let button = page.getLayoutButton('large');
    button.click().then(function () {
      // expect(page.getComponentElement('app-drag-zoom-2', 'svg').getAttribute('width')).toEqual('600');
      // expect(page.getComponentElement('app-drag-zoom-2', 'svg').getAttribute('height')).toEqual('600');
    });
  });
});
