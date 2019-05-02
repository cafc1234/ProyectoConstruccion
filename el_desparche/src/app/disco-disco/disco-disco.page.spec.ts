import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoDiscoPage } from './disco-disco.page';

describe('DiscoDiscoPage', () => {
  let component: DiscoDiscoPage;
  let fixture: ComponentFixture<DiscoDiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoDiscoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
