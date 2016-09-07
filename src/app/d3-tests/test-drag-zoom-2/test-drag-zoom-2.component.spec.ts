/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TestDragZoom2Component } from './test-drag-zoom-2.component';

import { ElementRef } from '@angular/core';
import { D3Service } from 'd3-ng2-service';

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

  it('should have a d3 member', async(() => {
    let fixture = TestBed.createComponent(TestDragZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component.d3).toBeTruthy();
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
