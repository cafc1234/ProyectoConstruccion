import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBarrioPage } from './tienda-barrio.page';

describe('TiendaBarrioPage', () => {
  let component: TiendaBarrioPage;
  let fixture: ComponentFixture<TiendaBarrioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaBarrioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
