/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushZoom2Component } from './brush-zoom-2.component';

import { D3Service, D3 } from 'd3-ng2-service';


let fixture: ComponentFixture<BrushZoom2Component>;
let component: BrushZoom2Component;
let compiled: HTMLElement | null;

describe('Component: BrushZoom2', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        BrushZoom2Component
      ],
      providers: [
        D3Service
      ]
    });

    fixture = TestBed.createComponent(BrushZoom2Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy('Component instance not created');
  });

  it('should have exactly one "svg" element with dimensions 960x600', () => {
    let nativeEls: NodeListOf<SVGSVGElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('svg') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.clientWidth).toBe(960, 'Incorrect width');
      expect(nativeEl.clientHeight).toBe(600, 'Incorrect height');
    }
  });

  it('should have 900 "svg:circle" elements', () => {
    let nativeEls: NodeListOf<SVGCircleElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('circle') : [];
    expect(nativeEls.length).toBe(900, 'Incorrect number of elements found');
  });

  it(`should have one "svg:g" for x-axis with classes 'axis' and 'axis--x'`, () => {
    let nativeEls: NodeListOf<Element> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('g.axis.axis--x') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
  });

  it(`should have one "svg:g" for y-axis with classes 'axis' and 'axis--y'`, () => {
    let nativeEls: NodeListOf<Element> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('g.axis.axis--y') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
  });

});

