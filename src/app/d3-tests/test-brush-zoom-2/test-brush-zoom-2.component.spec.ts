/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TestBrushZoom2Component } from './test-brush-zoom-2.component';

import { D3Service, D3 } from 'd3-ng2-service';

describe('Component: TestBrushZoom2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestBrushZoom2Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have a d3 member with  relevant D3 members', async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    let component = fixture.debugElement.componentInstance;
    let d3: D3 | undefined = component.d3;
    expect(d3).toBeTruthy('No member d3 defined');
    expect(d3 && d3.brush && typeof d3.brush === 'function').toBeTruthy('Member function brush() of d3 not defined');
    expect(d3 && d3.zoom && typeof d3.zoom === 'function').toBeTruthy('Member function zoom() of d3 not defined');
  }));

  it(`should have heading h2 with text 'Brush & Zoom II (SVG) Example'`, async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Brush & Zoom II (SVG) Example');
  }));

  it('should have exactly one SVGSVGElement with dimensions 960x600', async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let svgElements = <NodeListOf<SVGCircleElement>>compiled.querySelectorAll('svg');
    expect(svgElements.length).toBe(1, 'Incorrect number of svg elements found');
    expect(svgElements[0].clientWidth).toBe(960, 'Incorrect svg width');
    expect(svgElements[0].clientHeight).toBe(600, 'Incorrect svg height');
  }));

  it('should have 900 SVGCircleElements', async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('circle').length).toBe(900);
  }));

  it(`should have SVGGElement for x-axis with classes 'axis' and 'axis--x'`, async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('g.axis.axis--x')).toBeTruthy();
  }));

  it(`should have SVGGElement for y-axis with classes 'axis' and 'axis--y'`, async(() => {
    let fixture = TestBed.createComponent(TestBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('g.axis.axis--y')).toBeTruthy();
  }));

});
