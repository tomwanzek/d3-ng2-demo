/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
  MatCardModule,
  MatListModule
} from '@angular/material';

import {
  FlexLayoutModule
} from '@angular/flex-layout';


import { WrapperVoronoiSpirals3Component } from './wrapper-voronoi-spirals-3.component';

let fixture: ComponentFixture<WrapperVoronoiSpirals3Component>;
let component: WrapperVoronoiSpirals3Component;
let compiled: HTMLElement | null;

@Component({
  selector: 'app-voronoi-spirals-3',
  template: `<canvas></canvas>`
})
class MockChildComponent {}

describe('Component: WrapperVoronoiSpirals3', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        WrapperVoronoiSpirals3Component,
        MockChildComponent
      ],
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatListModule
      ]
    });

    fixture = TestBed.createComponent(WrapperVoronoiSpirals3Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a mat-card element as its only child DOM Element`, () => {
    let nativeEls: HTMLCollection | undefined[];
    nativeEls = compiled ? compiled.children : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      expect(nativeEls[0].tagName === 'mat-card' || nativeEls[0].tagName === 'MAT-CARD').toBeTruthy('Not a "mat-card" element.');
    }
  });

  it(`should have headline div with class 'mat-headline' and text content 'Voronoi Spirals III'`, () => {
    let nativeEls: NodeListOf<HTMLDivElement> | HTMLDivElement[];
    // HACK: Using 'as' due to TS issue with querySelectorAll signature in TS 2.5.3
    nativeEls = compiled ? compiled.querySelectorAll('div.mat-headline') as NodeListOf<HTMLDivElement> : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      const nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Voronoi Spirals III');
    }
  });

  it(`should contain an 'app-voronoi-spirals-3' component`, () => {
    expect(fixture.debugElement.query(By.css('app-voronoi-spirals-3'))).not.toBeNull('Missing.');
  });


});
