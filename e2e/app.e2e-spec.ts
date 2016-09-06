import { D3Ng2DemoPage } from './app.po';

describe('d3-ng2-demo App', function() {
  let page: D3Ng2DemoPage;

  beforeEach(() => {
    page = new D3Ng2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
