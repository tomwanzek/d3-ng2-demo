/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { TestDragZoom2Component } from './d3-tests/test-drag-zoom-2/test-drag-zoom-2.component';
import { TestBrushZoom2Component } from './d3-tests/test-brush-zoom-2/test-brush-zoom-2.component';
import { TestVoronoiSpirals3Component } from './d3-tests/test-voronoi-spirals-3/test-voronoi-spirals-3.component';

import { D3Service } from 'd3-ng2-service';

describe('App: D3Ng2Demo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestBrushZoom2Component,
        TestDragZoom2Component

        // TODO: The below component is omitted due to angular issue https://github.com/angular/angular/issues/10127

        // TestVoronoiSpirals3Component
      ],
      providers: [D3Service]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'D3 Demo'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('D3 Demo');
  }));

  it(`should render title 'D3 Demo' in a span of class 'navbar-brand'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.navbar-brand').textContent).toContain('D3 Demo');
  }));

  it(`should contain an 'app-test-brush-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-brush-zoom-2')).toBeTruthy();
  }));

  it(`should contain an 'app-test-brush-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-brush-zoom-2')).toBeTruthy();
  }));

  it(`should contain an 'app-test-voronoi-spirals-3' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-voronoi-spirals-3')).toBeTruthy();
  }));

  it(`should contain an 'app-test-drag-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-drag-zoom-2')).toBeTruthy();
  }));

});
