import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeBarPage } from './cafe-bar.page';

describe('CafeBarPage', () => {
  let component: CafeBarPage;
  let fixture: ComponentFixture<CafeBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
