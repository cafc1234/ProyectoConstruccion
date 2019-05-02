import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVacaPage } from './plan-vaca.page';

describe('PlanVacaPage', () => {
  let component: PlanVacaPage;
  let fixture: ComponentFixture<PlanVacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanVacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
