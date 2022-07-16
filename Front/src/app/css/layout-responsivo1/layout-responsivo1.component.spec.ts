import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutResponsivo1Component } from './layout-responsivo1.component';

describe('LayoutResponsivo1Component', () => {
  let component: LayoutResponsivo1Component;
  let fixture: ComponentFixture<LayoutResponsivo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutResponsivo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutResponsivo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
