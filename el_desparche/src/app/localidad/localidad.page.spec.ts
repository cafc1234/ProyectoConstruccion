import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadPage } from './localidad.page';

describe('Tab1Page', () => {
  let component: LocalidadPage;
  let fixture: ComponentFixture<LocalidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalidadPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
