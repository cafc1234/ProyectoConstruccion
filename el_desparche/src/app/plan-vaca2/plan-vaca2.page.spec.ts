import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVaca2Page } from './plan-vaca2.page';

describe('PlanVaca2Page', () => {
  let component: PlanVaca2Page;
  let fixture: ComponentFixture<PlanVaca2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanVaca2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVaca2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
