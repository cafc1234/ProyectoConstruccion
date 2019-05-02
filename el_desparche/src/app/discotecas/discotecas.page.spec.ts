import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscotecasPage } from './discotecas.page';

describe('DiscotecasPage', () => {
  let component: DiscotecasPage;
  let fixture: ComponentFixture<DiscotecasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscotecasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscotecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
