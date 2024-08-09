import { TestBed } from '@angular/core/testing';

import { TipoTransporteService } from './tipo-transporte.service';

describe('TipoTransporteService', () => {
  let service: TipoTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
