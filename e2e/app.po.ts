import { browser, element, by } from 'protractor';

export class D3Ng2DemoPage {
  navigateTo() {
    return browser.get('/');
  }


  getComponentElement(componentSelector: string, elementCssSelector: string) {
    return element(by.tagName(componentSelector)).all(by.tagName(elementCssSelector));
  }

  getLayoutButton(buttonText: string) {
    return element(by.tagName('app-wrapper-drag-zoom-2')).all(by.css('button.layout-' + buttonText));
  }

}

