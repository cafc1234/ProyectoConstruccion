import { TestBed } from '@angular/core/testing';

import { InvitacionesVacaService } from './invitaciones-vaca.service';

describe('InvitacionesVacaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitacionesVacaService = TestBed.get(InvitacionesVacaService);
    expect(service).toBeTruthy();
  });
});
