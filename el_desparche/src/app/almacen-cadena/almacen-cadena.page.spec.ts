import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCadenaPage } from './almacen-cadena.page';

describe('AlmacenCadenaPage', () => {
  let component: AlmacenCadenaPage;
  let fixture: ComponentFixture<AlmacenCadenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenCadenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenCadenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
