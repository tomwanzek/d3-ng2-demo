/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

// Unit Tests without child components

@Component({
  selector: 'app-wrapper-brush-zoom-2',
  template: `<div></div>`
})
class MockChild1Component {}

@Component({
  selector: 'app-wrapper-drag-zoom-2',
  template: `<div></div>`
})
class MockChild2Component {}

@Component({
  selector: 'app-wrapper-voronoi-spirals-3',
  template: `<div></div>`
})
class MockChild3Component {}


describe('App: D3Ng2Demo', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          MockChild1Component,
          MockChild2Component,
          MockChild3Component
        ]
      });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title member with value 'D3 Angular 2 Demo'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('D3 Angular 2 Demo');
  }));

  it(`should render title 'D3 Angular 2 Demo' in a span of class 'navbar-brand'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('span.navbar-brand').textContent).toContain('D3 Angular 2 Demo');
    }
  }));

  it(`should contain an 'app-wrapper-brush-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('app-wrapper-brush-zoom-2')).toBeTruthy();
    }
  }));

  it(`should contain an 'app-wrapper-drag-zoom-2' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('app-wrapper-drag-zoom-2')).toBeTruthy();
    }
  }));

  it(`should contain an 'app-wrapper-voronoi-spirals-3' component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: HTMLElement | null = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy('Component compilation does not return valid nativeElement');
    if (compiled) {
      expect(compiled.querySelector('app-wrapper-voronoi-spirals-3')).toBeTruthy();
    }
  }));


});
