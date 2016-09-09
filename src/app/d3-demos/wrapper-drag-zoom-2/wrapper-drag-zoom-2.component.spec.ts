/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WrapperDragZoom2Component } from './wrapper-drag-zoom-2.component';
import { DragZoom2Component } from '../drag-zoom-2/drag-zoom-2.component';

import { D3Service } from 'd3-ng2-service';

describe('Component: WrapperDragZoom2', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperDragZoom2Component,
        DragZoom2Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the mock test component', async(() => {
    let fixture = TestBed.createComponent(WrapperDragZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have a div with class 'container' as its only child HTMLElement`, async(() => {
    let fixture = TestBed.createComponent(WrapperDragZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.children.length).toBe(1, 'Incorrect number of children.');
      expect(compiled.children[0].tagName === 'div' || compiled.tagName === 'DIV').toBeTruthy('Not a "div" element.');
      expect(compiled.children[0].classList.contains('container')).toBeTruthy('Not of class "container".');
    }
  }));

  it(`should have heading h3 with text 'Drag & Zoom II'`, async(() => {
    let fixture = TestBed.createComponent(WrapperDragZoom2Component);
    fixture.detectChanges();
    let compiled: HTMLDivElement = fixture.debugElement.nativeElement;
    let h3: HTMLHeadingElement | null;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      h3 = compiled.querySelector('h3') || null;
      expect(h3).toBeTruthy('Unable to find h3 heading element');
    }
    if (compiled && h3) {
      expect(h3.textContent).toBe('Drag & Zoom II');
    }
  }));

});
