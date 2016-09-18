/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoronoiSpirals3Component } from './voronoi-spirals-3.component';

import { D3Service, D3 } from 'd3-ng2-service';

let fixture: ComponentFixture<VoronoiSpirals3Component>;
let component: VoronoiSpirals3Component;
let compiled: HTMLElement | null;


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

    fixture = TestBed.createComponent(VoronoiSpirals3Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have exactly one "canvas" element with dimensions 400x400', () => {
    let nativeEls: NodeListOf<HTMLCanvasElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('canvas') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.clientWidth).toBe(400, 'Incorrect width');
      expect(nativeEl.clientHeight).toBe(400, 'Incorrect height');
    }

  });

});
