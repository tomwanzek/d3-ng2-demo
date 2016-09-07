/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TestDragZoom2Component } from './test-drag-zoom-2.component';

import { D3Service, D3 } from 'd3-ng2-service';

describe('Component: TestDragZoom2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestDragZoom2Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have a d3 member with relevant D3 members', async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    let component = fixture.debugElement.componentInstance;
    let d3: D3 | undefined = component.d3;
    expect(d3).toBeTruthy('No member d3 defined');
    expect(d3 && d3.drag && typeof d3.drag === 'function').toBeTruthy('Member function drag() of d3 not defined');
    expect(d3 && d3.zoom && typeof d3.zoom === 'function').toBeTruthy('Member function zoom() of d3 not defined');
  }));

  it(`should have heading h2 with text 'Drag & Zoom II (SVG) Example'`, async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Drag & Zoom II Example');
  }));

  it('should have exactly one SVGSVGElement with dimensions 400x400', async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let svgElements = <NodeListOf<SVGCircleElement>>compiled.querySelectorAll('svg');
    expect(svgElements.length).toBe(1, 'Incorrect number of svg elements found');
    expect(svgElements[0].clientWidth).toBe(400, 'Incorrect svg width');
    expect(svgElements[0].clientHeight).toBe(400, 'Incorrect svg height');
  }));

  it('should have 2000 SVGCircleElements', async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('circle').length).toBe(2000);
  }));

});
