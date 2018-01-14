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

import { WrapperBrushZoom2Component } from './wrapper-brush-zoom-2.component';

let fixture: ComponentFixture<WrapperBrushZoom2Component>;
let component: WrapperBrushZoom2Component;
let compiled: HTMLElement | null;

@Component({
  selector: 'app-brush-zoom-2',
  template: `<svg></svg>`
})
class MockChildComponent { }

describe('Component: WrapperBrushZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperBrushZoom2Component,
        MockChildComponent
      ],
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatListModule
      ]
    });

    fixture = TestBed.createComponent(WrapperBrushZoom2Component);
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

  it(`should have headline div with class 'mat-headline' and text content 'Brush & Zoom II'`, () => {
    let nativeEls: NodeListOf<HTMLHeadingElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('div.mat-headline') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      const nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Brush & Zoom II');
    }
  });

  it(`should contain an 'app-brush-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-brush-zoom-2'))).not.toBeNull('Missing.');
  });

});


