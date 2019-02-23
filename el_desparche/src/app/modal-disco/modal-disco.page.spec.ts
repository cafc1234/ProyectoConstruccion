import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDiscoPage } from './modal-disco.page';

describe('ModalDiscoPage', () => {
  let component: ModalDiscoPage;
  let fixture: ComponentFixture<ModalDiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDiscoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
