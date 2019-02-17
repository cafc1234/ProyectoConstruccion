import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlmacenPage } from './modal-almacen.page';

describe('ModalAlmacenPage', () => {
  let component: ModalAlmacenPage;
  let fixture: ComponentFixture<ModalAlmacenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlmacenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
