import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBarPage } from './modal-bar.page';

describe('ModalBarPage', () => {
  let component: ModalBarPage;
  let fixture: ComponentFixture<ModalBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
