import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeYbarPage } from './cafe-ybar.page';

describe('CafeYbarPage', () => {
  let component: CafeYbarPage;
  let fixture: ComponentFixture<CafeYbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeYbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeYbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
