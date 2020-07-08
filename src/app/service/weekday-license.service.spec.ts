import { TestBed } from '@angular/core/testing';

import { WeekdayLicenseService } from './weekday-license.service';

describe('WeekdayLicenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekdayLicenseService = TestBed.get(WeekdayLicenseService);
    expect(service).toBeTruthy();
  });
});
