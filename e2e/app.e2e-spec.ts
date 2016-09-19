import { D3Ng2DemoPage } from './app.po';

const initialDragZoom2Dimensions = {
  width: 400,
  height: 400
};

const resizedDragZoom2Dimensions = {
  width: 600,
  height: 600
};

describe('d3-ng2-demo App', function () {
  let page: D3Ng2DemoPage;

  beforeEach(() => {
    page = new D3Ng2DemoPage();

    page.navigateTo();
  });

  it('should have one svg with initial dimensions ' +
  initialDragZoom2Dimensions.width + 'x' + initialDragZoom2Dimensions.height +
  ' in app-drag-zoom-2 component', () => {
    let svg = page.getComponentElement('app-drag-zoom-2', 'svg');
    expect(svg.count()).toEqual(1, 'Incorrect number of elements');
    expect(svg.first().getAttribute('width')).toEqual(initialDragZoom2Dimensions.width + '', 'Incorrect width.');
    expect(svg.first().getAttribute('height')).toEqual(initialDragZoom2Dimensions.height + '', 'Incorrect height.');

  });

  it('should resize the layout of the Drag & Zoom II visual to '
  + resizedDragZoom2Dimensions.width + 'x' + resizedDragZoom2Dimensions.height +
  ' after pressing "large" button', () => {
    let button = page.getLayoutButton('large');

    expect(button.count()).toEqual(1, 'Incorrect number of "large" buttons');

    button.first().click();

    let svg = page.getComponentElement('app-drag-zoom-2', 'svg');
    expect(svg.count()).toEqual(1, 'Incorrect number of svg elements');
    expect(svg.first().getAttribute('width')).toEqual(resizedDragZoom2Dimensions.width + '', 'Incorrect width.');
    expect(svg.first().getAttribute('height')).toEqual(resizedDragZoom2Dimensions.height + '', 'Incorrect height.');
  });
});
