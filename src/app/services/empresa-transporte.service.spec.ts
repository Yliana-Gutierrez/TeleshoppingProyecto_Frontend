import { TestBed } from '@angular/core/testing';

import { EmpresaTransporteService } from './empresa-transporte.service';

describe('EmpresaTransporteService', () => {
  let service: EmpresaTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
