/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrushZoom2Component } from './brush-zoom-2.component';

import { D3Service, D3 } from 'd3-ng2-service';

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
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have a d3 member with relevant D3 functionality', async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    // HACK: Do not type component allows testing of private properties
    let component = fixture.debugElement.componentInstance;
    let d3: D3 | undefined = component.d3;
    expect(d3).toBeTruthy('No member d3 defined');
    if (d3) {
      expect(d3.brush && typeof d3.brush === 'function').toBeTruthy('Member function brush() of d3 not defined');
      expect(d3.zoom && typeof d3.zoom === 'function').toBeTruthy('Member function zoom() of d3 not defined');
    }
  }));

  it('should have exactly one "svg" element with dimensions 960x600', async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    let svgElements: NodeListOf<SVGSVGElement>;
    if (compiled) {
      svgElements = compiled.querySelectorAll('svg');
      expect(svgElements.length).toBe(1, 'Incorrect number of svg elements found');
      if (svgElements.length === 1) {
        expect(svgElements[0].clientWidth).toBe(960, 'Incorrect svg width');
        expect(svgElements[0].clientHeight).toBe(600, 'Incorrect svg height');
      }
    }
  }));

  it('should have 900 "svg:circle" elements', async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelectorAll('circle').length).toBe(900);
    }
  }));

  it(`should have "svg:g" for x-axis with classes 'axis' and 'axis--x'`, async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('g.axis.axis--x')).toBeTruthy();
    }
  }));

  it(`should have "svg:g" for y-axis with classes 'axis' and 'axis--y'`, async(() => {
    let fixture = TestBed.createComponent(BrushZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('g.axis.axis--y')).toBeTruthy();
    }
  }));

});

