import { TestBed } from '@angular/core/testing';

import { DiscoService } from './disco.service';

describe('AmigosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscoService = TestBed.get(DiscoService);
    expect(service).toBeTruthy();
  });
});