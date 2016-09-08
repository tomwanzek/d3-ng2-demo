/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WrapperVoronoiSpirals3Component } from './wrapper-voronoi-spirals-3.component';

import { VoronoiSpirals3Component } from '../voronoi-spirals-3/voronoi-spirals-3.component';
import { D3Service, D3 } from 'd3-ng2-service';

// TODO: The test for this component are subject to angular issue https://github.com/angular/angular/issues/10127

describe('Component: WrapperVoronoiSpirals3', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperVoronoiSpirals3Component,
        VoronoiSpirals3Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
    // fixture.detectChanges(); // TODO: angular issue https://github.com/angular/angular/issues/10127
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have heading h2 with text 'Voronoi Spirals III'`, async(() => {
    let fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
    // fixture.detectChanges(); // TODO: angular issue https://github.com/angular/angular/issues/10127
    let compiled = fixture.debugElement.nativeElement;
    let h3: HTMLHeadingElement | null = compiled.querySelector('h3') || null;
    expect(h3 && h3.textContent).toBe('Voronoi Spirals III');
  }));


});
