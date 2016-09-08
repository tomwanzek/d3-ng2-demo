/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { VoronoiSpirals3Component } from './voronoi-spirals-3.component';

import { D3Service, D3 } from 'd3-ng2-service';

// TODO: The test for this component are subject to angular issue https://github.com/angular/angular/issues/10127

describe('Component: VoronoiSpirals3', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoronoiSpirals3Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(VoronoiSpirals3Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have a d3 member with relevant D3 functionality', async(() => {
    let fixture = TestBed.createComponent(VoronoiSpirals3Component);
    let component = fixture.debugElement.componentInstance;
    let d3: D3 | undefined = component.d3;
    expect(d3).toBeTruthy('No member d3 defined');
    expect(d3 && d3.voronoi && typeof d3.voronoi === 'function').toBeTruthy('Member function voronoi() of d3 not defined');
  }));

  it('should have exactly one HTMLCanvasElement with dimensions 400x400', async(() => {
    let fixture = TestBed.createComponent(VoronoiSpirals3Component);
    let compiled = fixture.debugElement.nativeElement;
    let canvasElements = <NodeListOf<HTMLCanvasElement>>compiled.querySelectorAll('canvas');
    expect(canvasElements.length).toBe(1, 'Incorrect number of canvas elements found');
    expect(canvasElements.length === 1 && canvasElements[0].clientWidth).toBe(400, 'Incorrect canvas width');
    expect(canvasElements.length === 1 && canvasElements[0].clientHeight).toBe(400, 'Incorrect canvas height');
  }));

});
