import { TestBed } from '@angular/core/testing';

import { TiendasBarrioService } from './tiendas-barrio.service';

describe('TiendasBarrioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiendasBarrioService = TestBed.get(TiendasBarrioService);
    expect(service).toBeTruthy();
  });
});
