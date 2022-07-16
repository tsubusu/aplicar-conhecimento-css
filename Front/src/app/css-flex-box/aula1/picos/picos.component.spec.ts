import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicosComponent } from './picos.component';

describe('PicosComponent', () => {
  let component: PicosComponent;
  let fixture: ComponentFixture<PicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
