/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { WrapperVoronoiSpirals3Component } from './wrapper-voronoi-spirals-3.component';

let fixture: ComponentFixture<WrapperVoronoiSpirals3Component>;
let component: WrapperVoronoiSpirals3Component;
let compiled: HTMLElement | null;

@Component({
  selector: 'app-voronoi-spirals-3',
  template: `<canvas></canvas>`
})
class MockChildComponent {};

describe('Component: WrapperVoronoiSpirals3', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        WrapperVoronoiSpirals3Component,
        MockChildComponent
      ]
    });

    fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
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

  it(`should have heading h3 with text 'Voronoi Spirals III'`, () => {
    let nativeEls: NodeListOf<HTMLHeadingElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('h3') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Voronoi Spirals III');
    }
  });

  it(`should contain an 'app-voronoi-spirals-3' component`, () => {
    expect(fixture.debugElement.query(By.css('app-voronoi-spirals-3'))).not.toBeNull('Missing.');
  });


});
