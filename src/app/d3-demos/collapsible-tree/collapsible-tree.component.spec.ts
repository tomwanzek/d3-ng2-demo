import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleTreeComponent } from './collapsible-tree.component';

import { D3Service, D3 } from 'd3-ng2-service';

describe('CollapsibleTreeComponent', () => {
  let component: CollapsibleTreeComponent;
  let fixture: ComponentFixture<CollapsibleTreeComponent>;
  let compiled: HTMLElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleTreeComponent],
      providers: [
        D3Service
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have exactly one "svg" element with dimensions 960x500', () => {
    let nativeEls: NodeListOf<SVGSVGElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('svg') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.clientWidth).toBe(960, 'Incorrect width');
      expect(nativeEl.clientHeight).toBe(500, 'Incorrect height');
    }
  });

  it('should have 3 "svg:circle" elements', () => {
    let nativeEls: NodeListOf<SVGCircleElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('circle') : [];
    expect(nativeEls.length).toBe(3, 'Incorrect number of elements found');
  });  
});
