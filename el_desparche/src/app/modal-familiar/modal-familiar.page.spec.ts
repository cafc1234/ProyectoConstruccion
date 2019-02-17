import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFamiliarPage } from './modal-familiar.page';

describe('ModalFamiliarPage', () => {
  let component: ModalFamiliarPage;
  let fixture: ComponentFixture<ModalFamiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFamiliarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
