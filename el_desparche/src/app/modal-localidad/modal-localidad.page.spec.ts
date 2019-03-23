import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocalidadPage } from './modal-localidad.page';

describe('ModalLocalidadPage', () => {
  let component: ModalLocalidadPage;
  let fixture: ComponentFixture<ModalLocalidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLocalidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLocalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
