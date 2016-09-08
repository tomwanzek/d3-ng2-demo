/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Unit Tests without child components

describe('App: D3Ng2Demo', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent
        ]
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

  it(`should contain an 'app-wrapper-brush-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-wrapper-brush-zoom-2')).toBeTruthy();
  }));

  it(`should contain an 'app-wrapper-drag-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-wrapper-drag-zoom-2')).toBeTruthy();
  }));

  it(`should contain an 'app-wrapper-voronoi-spirals-3' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-wrapper-voronoi-spirals-3')).toBeTruthy();
  }));


});
