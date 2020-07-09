import { TestBed } from '@angular/core/testing';

import { PredictDataService } from './predict-data.service';

describe('WeekdayLicenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictDataService = TestBed.get(PredictDataService);
    expect(service).toBeTruthy();
  });
});
