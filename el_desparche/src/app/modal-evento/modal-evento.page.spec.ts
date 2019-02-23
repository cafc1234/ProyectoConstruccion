import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventoPage } from './modal-evento.page';

describe('ModalEventoPage', () => {
  let component: ModalEventoPage;
  let fixture: ComponentFixture<ModalEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
