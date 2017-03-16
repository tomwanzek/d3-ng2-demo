import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { WrapperCollapsibleTreeComponent } from './wrapper-collapsible-tree.component';

@Component({
  selector: 'app-collapsible-tree',
  template: `<svg></svg>`
})
class MockChildComponent {
  @Input() private data: any;
}

describe('WrapperCollapsibleTreeComponent', () => {
  let component: WrapperCollapsibleTreeComponent;
  let fixture: ComponentFixture<WrapperCollapsibleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperCollapsibleTreeComponent, MockChildComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperCollapsibleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
