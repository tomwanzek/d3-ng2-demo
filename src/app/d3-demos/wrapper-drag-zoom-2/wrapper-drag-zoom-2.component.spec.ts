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

  it(`should have heading h2 with text 'Drag & Zoom II (SVG) Example'`, async(() => {
    let fixture = TestBed.createComponent(WrapperDragZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Drag & Zoom II Example');
  }));

});
