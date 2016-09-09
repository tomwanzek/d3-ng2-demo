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

  it(`should have a div with class 'container' as its only child HTMLElement`, async(() => {
    let fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
    // fixture.detectChanges(); // TODO: angular issue https://github.com/angular/angular/issues/10127
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.children.length).toBe(1, 'Incorrect number of children.');
      expect(compiled.children[0].tagName === 'div' || compiled.tagName === 'DIV').toBeTruthy('Not a "div" element.');
      expect(compiled.children[0].classList.contains('container')).toBeTruthy('Not of class "container".');
    }
  }));

  it(`should have heading h3 with text 'Voronoi Spirals III'`, async(() => {
    let fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
    // fixture.detectChanges(); // TODO: angular issue https://github.com/angular/angular/issues/10127
    let compiled: HTMLDivElement = fixture.debugElement.nativeElement;
    let h3: HTMLHeadingElement | null;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      h3 = compiled.querySelector('h3') || null;
      expect(h3).toBeTruthy('Unable to find h3 heading element');
    }
    if (compiled && h3) {
      expect(h3.textContent).toBe('Voronoi Spirals III');
    }
  }));


});
