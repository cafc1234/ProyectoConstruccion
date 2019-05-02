import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafebarPage } from './cafebar.page';

describe('CafebarPage', () => {
  let component: CafebarPage;
  let fixture: ComponentFixture<CafebarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafebarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafebarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
