/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DragZoom2Component } from './drag-zoom-2.component';
import { DragZoom2Layout } from '../wrapper-drag-zoom-2/wrapper-drag-zoom-2.component';


import { D3Service, D3 } from 'd3-ng2-service';

describe('Component: DragZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DragZoom2Component,
        AppMockComponent
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the mock test component', async(() => {
    let fixture = TestBed.createComponent(AppMockComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have a d3 member with relevant D3 functionality', async(() => {
    let fixture = TestBed.createComponent(DragZoom2Component);
    // HACK: Do not type component allows testing of private properties
    let component = fixture.debugElement.componentInstance;
    let d3: D3 | undefined = component.d3;
    expect(d3).toBeTruthy('No member d3 defined');
    if (d3) {
      expect(d3.drag && typeof d3.drag === 'function').toBeTruthy('Member function drag() of d3 not defined');
      expect(d3.zoom && typeof d3.zoom === 'function').toBeTruthy('Member function zoom() of d3 not defined');
    }
  }));


  it(`should have exactly one "svg" with dimensions 400x400 in 'small' layout`, async(() => {
    let fixture = TestBed.createComponent(AppMockComponent);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    let svgElements: NodeListOf<SVGSVGElement>;
    if (compiled) {
      svgElements = compiled.querySelectorAll('svg');
      expect(svgElements.length).toBe(1, 'Incorrect number of svg elements found');
      if (svgElements.length === 1) {
        expect(svgElements[0].clientWidth).toBe(400, 'Incorrect svg width');
        expect(svgElements[0].clientHeight).toBe(400, 'Incorrect svg height');
      }
    }
  }));

  it(`should have exactly one "svg" with dimensions 600x600 after change to 'large' layout`, async(() => {
    let fixture = TestBed.createComponent(AppMockComponent);
    let component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component.selectedLayout = component.dragZoom2Layouts[1];
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    let svgElements: NodeListOf<SVGSVGElement>;
    if (compiled) {
      svgElements = compiled.querySelectorAll('svg');
      expect(svgElements.length).toBe(1, 'Incorrect number of svg elements found');
      if (svgElements.length === 1) {
        expect(svgElements[0].clientWidth).toBe(600, 'Incorrect svg width');
        expect(svgElements[0].clientHeight).toBe(600, 'Incorrect svg height');
      }
    }
  }));


  it('should have 2000 "sg:circle" elements', async(() => {
    let fixture = TestBed.createComponent(AppMockComponent);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelectorAll('circle').length).toBe(2000);
    }
  }));

});


@Component({
  selector: 'app-mock-component',
  template: `<app-drag-zoom-2
  [width]="selectedLayout.width"
  [height]="selectedLayout.height"
  [phylloRadius]="selectedLayout.phylloRadius"
  [pointRadius]="selectedLayout.pointRadius">
  </app-drag-zoom-2>`
})
class AppMockComponent {

  public selectedLayout: DragZoom2Layout;

  public dragZoom2Layouts: DragZoom2Layout[] = [
    {
      name: 'small',
      label: 'Small Visualization',
      width: 400,
      height: 400,
      phylloRadius: 4,
      pointRadius: 2
    },
    {
      name: 'large',
      label: 'Large Visualization',
      width: 600,
      height: 600,
      phylloRadius: 7,
      pointRadius: 2.5
    }
  ];

  constructor() {
    this.selectedLayout = this.dragZoom2Layouts[0];
  }

}
