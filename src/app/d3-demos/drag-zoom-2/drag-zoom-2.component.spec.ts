/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DragZoom2Component } from './drag-zoom-2.component';
import { DragZoom2Layout } from '../wrapper-drag-zoom-2/wrapper-drag-zoom-2.component';


import { D3Service, D3 } from 'd3-ng2-service';


let fixture: ComponentFixture<AppMockComponent>;
let component: AppMockComponent;
let compiled: HTMLElement | null;



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

    fixture = TestBed.createComponent(AppMockComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;


  });

  it('should create the mock test component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have exactly one "svg" with dimensions 400x400 in 'small' layout`, () => {
    let nativeEls: NodeListOf<SVGSVGElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('svg') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.clientWidth).toBe(400, 'Incorrect width');
      expect(nativeEl.clientHeight).toBe(400, 'Incorrect height');
    }
  });

  it(`should have exactly one "svg" with dimensions 600x600 after change to 'large' layout`, () => {
    let nativeEls: NodeListOf<SVGSVGElement> | undefined[];
    component.selectedLayout = component.dragZoom2Layouts[1];
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    nativeEls = compiled ? compiled.querySelectorAll('svg') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.clientWidth).toBe(600, 'Incorrect width');
      expect(nativeEl.clientHeight).toBe(600, 'Incorrect height');
    }
  });


  it('should have 2000 "svg:circle" elements', () => {
    let nativeEls: NodeListOf<SVGCircleElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('circle') : [];
    expect(nativeEls.length).toBe(2000, 'Incorrect number of elements found');
  });

});

