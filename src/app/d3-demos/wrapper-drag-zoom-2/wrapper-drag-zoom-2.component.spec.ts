/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WrapperDragZoom2Component } from './wrapper-drag-zoom-2.component';
import { DragZoom2Component } from '../drag-zoom-2/drag-zoom-2.component';

import { D3Service } from 'd3-ng2-service';


let fixture: ComponentFixture<WrapperDragZoom2Component>;
let component: WrapperDragZoom2Component;
let compiled: HTMLElement | null;

describe('Component: WrapperDragZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperDragZoom2Component,
        DragZoom2Component
      ],
      providers: [
        D3Service
      ]
    });

    fixture = TestBed.createComponent(WrapperDragZoom2Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the mock test component', () => {
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

  it(`should have heading h3 with text 'Drag & Zoom II'`, () => {
    let nativeEls: NodeListOf<HTMLHeadingElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('h3') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Drag & Zoom II');
    }
  });

  it(`should contain an 'app-drag-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-drag-zoom-2'))).not.toBeNull('Missing.');
  });

});
