import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlexBoxComponent } from './css-flex-box.component';

describe('CssFlexBoxComponent', () => {
  let component: CssFlexBoxComponent;
  let fixture: ComponentFixture<CssFlexBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFlexBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
