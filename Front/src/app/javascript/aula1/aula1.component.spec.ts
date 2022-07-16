import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula1Component } from './aula1.component';

describe('Aula1Component', () => {
  let component: Aula1Component;
  let fixture: ComponentFixture<Aula1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
