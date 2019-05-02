import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionesFamiliaresPage } from './invitaciones-familiares.page';

describe('InvitacionesFamiliaresPage', () => {
  let component: InvitacionesFamiliaresPage;
  let fixture: ComponentFixture<InvitacionesFamiliaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionesFamiliaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionesFamiliaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
