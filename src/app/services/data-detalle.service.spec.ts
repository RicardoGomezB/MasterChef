import { TestBed } from '@angular/core/testing';

import { DataDetalleService } from './data-detalle.service';

describe('DataDetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDetalleService = TestBed.get(DataDetalleService);
    expect(service).toBeTruthy();
  });
});
