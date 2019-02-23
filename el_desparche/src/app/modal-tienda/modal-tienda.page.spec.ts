import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiendaPage } from './modal-tienda.page';

describe('ModalTiendaPage', () => {
  let component: ModalTiendaPage;
  let fixture: ComponentFixture<ModalTiendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTiendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
