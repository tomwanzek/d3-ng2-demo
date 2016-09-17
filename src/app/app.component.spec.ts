/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let compiled: HTMLElement | null;

// Unit Tests without child components

@Component({
  selector: 'app-wrapper-brush-zoom-2',
  template: `<div></div>`
})
class MockChild1Component { }

@Component({
  selector: 'app-wrapper-drag-zoom-2',
  template: `<div></div>`
})
class MockChild2Component { }

@Component({
  selector: 'app-wrapper-voronoi-spirals-3',
  template: `<div></div>`
})
class MockChild3Component { }


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

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title member with value 'D3 Angular 2 Demo'`, () => {
    expect(component.title).toEqual('D3 Angular 2 Demo');
  });

  it(`should render title 'D3 Angular 2 Demo' in a span of class 'navbar-brand'`, () => {
    let debugEl = fixture.debugElement.query(By.css('span.navbar-brand'));
    expect(debugEl).not.toBeNull('Missing.');
    if (debugEl) {
      let nativeEl: HTMLSpanElement = debugEl.nativeElement;
      expect(nativeEl.textContent).toContain('D3 Angular 2 Demo');
    }
  });

  it(`should contain an 'app-wrapper-brush-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-wrapper-brush-zoom-2'))).not.toBeNull('Missing.');
  });

  it(`should contain an 'app-wrapper-drag-zoom-2' component`, () => {
    expect(fixture.debugElement.query(By.css('app-wrapper-drag-zoom-2'))).not.toBeNull('Missing.');
  });

  it(`should contain an 'app-wrapper-voronoi-spirals-3' component`, () => {
    expect(fixture.debugElement.query(By.css('app-wrapper-voronoi-spirals-3'))).not.toBeNull('Missing.');
  });


});
