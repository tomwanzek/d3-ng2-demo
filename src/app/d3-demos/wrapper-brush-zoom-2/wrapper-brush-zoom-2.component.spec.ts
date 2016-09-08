/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WrapperBrushZoom2Component } from './wrapper-brush-zoom-2.component';
import { BrushZoom2Component } from '../brush-zoom-2/brush-zoom-2.component';

import { D3Service } from 'd3-ng2-service';

describe('Component: WrapperBrushZoom2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperBrushZoom2Component,
        BrushZoom2Component
      ],
      providers: [
        D3Service
      ]
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(WrapperBrushZoom2Component);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have heading h2 with text 'Brush & Zoom II (SVG) Example'`, async(() => {
    let fixture = TestBed.createComponent(WrapperBrushZoom2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Brush & Zoom II (SVG) Example');
  }));

});


