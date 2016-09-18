import { browser, element, by } from 'protractor/globals';

export class D3Ng2DemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getComponentElement(componentSelector: string, elementCssSelector: string) {
    return element(by.tagName(componentSelector)).all(by.tagName(elementCssSelector));
  }

  getComponentElementCount(componentSelector: string, elementCssSelector: string) {
    return element(by.tagName(componentSelector)).all(by.tagName(elementCssSelector)).count();
  }


  getLayoutButton(buttonText: string) {
    return element(by.tagName('app-wrapper-drag-zoom-2')).all(by.tagName('button')).all(by.xpath('.//*[.="' + buttonText + '"]'));
  }

}
