import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFamiliar2Page } from './plan-familiar2.page';

describe('PlanFamiliar2Page', () => {
  let component: PlanFamiliar2Page;
  let fixture: ComponentFixture<PlanFamiliar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanFamiliar2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFamiliar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
