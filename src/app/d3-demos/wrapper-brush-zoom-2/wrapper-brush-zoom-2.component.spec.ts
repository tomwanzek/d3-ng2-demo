/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { WrapperBrushZoom2Component } from './wrapper-brush-zoom-2.component';

let fixture: ComponentFixture<WrapperBrushZoom2Component>;
let component: WrapperBrushZoom2Component;
let compiled: HTMLElement | null;

@Component({
  selector: 'app-brush-zoom-2',
  template: `<svg></svg>`
})
class MockChildComponent { }

describe('Component: WrapperBrushZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperBrushZoom2Component,
        MockChildComponent
      ]
    });

    fixture = TestBed.createComponent(WrapperBrushZoom2Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it(`should have a div with class 'container' as its only child HTMLElement`, () => {
    let nativeEls: HTMLCollection | undefined[];
    nativeEls = compiled ? compiled.children : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      expect(nativeEls[0].tagName === 'div' || nativeEls[0].tagName === 'DIV').toBeTruthy('Not a "div" element.');
      expect(nativeEls[0].classList.contains('container')).toBeTruthy('Not of class "container".');
    }
  });

  it(`should have heading h3 with text 'Brush & Zoom II'`, () => {
    let nativeEls: NodeListOf<HTMLHeadingElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('h3') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Brush & Zoom II');
    }
  });

  it(`should contain an 'app-brush-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-brush-zoom-2'))).not.toBeNull('Missing.');
  });

});


