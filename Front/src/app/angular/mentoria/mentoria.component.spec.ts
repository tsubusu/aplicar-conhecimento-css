import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoriaComponent } from './mentoria.component';

describe('MentoriaComponent', () => {
  let component: MentoriaComponent;
  let fixture: ComponentFixture<MentoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
