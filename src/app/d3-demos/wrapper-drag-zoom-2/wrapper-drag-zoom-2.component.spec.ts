/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WrapperDragZoom2Component } from './wrapper-drag-zoom-2.component';
import { DragZoom2Component } from '../drag-zoom-2/drag-zoom-2.component';

import { D3Service } from 'd3-ng2-service';

import {
  MatCardModule,
  MatListModule
} from '@angular/material';

import {
  FlexLayoutModule
} from '@angular/flex-layout';

let fixture: ComponentFixture<WrapperDragZoom2Component>;
let component: WrapperDragZoom2Component;
let compiled: HTMLElement | null;

describe('Component: WrapperDragZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperDragZoom2Component,
        DragZoom2Component
      ],
      providers: [
        D3Service
      ],
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatListModule
      ]
    });

    fixture = TestBed.createComponent(WrapperDragZoom2Component);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the mock test component', () => {
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

  it(`should have headline div with class 'mat-headline' and text content 'Drag & Zoom II'`, () => {
    let nativeEls: NodeListOf<HTMLDivElement> | HTMLDivElement[];
    // HACK: Using 'as' due to TS issue with querySelectorAll signature in TS 2.5.3
    nativeEls = compiled ? compiled.querySelectorAll('div.mat-headline') as NodeListOf<HTMLDivElement> : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      const nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Drag & Zoom II');
    }
  });

  it(`should contain an 'app-drag-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-drag-zoom-2'))).not.toBeNull('Missing.');
  });

});
