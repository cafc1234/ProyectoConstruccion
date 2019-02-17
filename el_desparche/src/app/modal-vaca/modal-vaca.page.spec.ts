import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVacaPage } from './modal-vaca.page';

describe('ModalVacaPage', () => {
  let component: ModalVacaPage;
  let fixture: ComponentFixture<ModalVacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
