import { TestBed } from '@angular/core/testing';

import { PredictorService } from './predictor.service';
import {LicensePlatePredict} from "../model/LicensePlatePredict";

describe('PredictorService', () => {
  let forbiddenLicenseInput: LicensePlatePredict;
  let permittedLicenseInput: LicensePlatePredict;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeAll(() => {
    forbiddenLicenseInput = {
      date: '2020-07-08',
      time: '07:30',
      licensePlate: 'ABC-12345'
    }
    permittedLicenseInput = {
      date: '2020-07-08',
      time: '07:30',
      licensePlate: 'ABC-12343'
    }
  });

  it('should be created', () => {
    const service: PredictorService = TestBed.get(PredictorService);
    expect(service).toBeTruthy();
  });

  it ('should return true with forbidden input', (done: DoneFn) => {
    const service: PredictorService = TestBed.get(PredictorService);
    service
      .predict(forbiddenLicenseInput)
      .then(bool => { expect(bool).toBeTruthy(); done(); })
      .catch(_ => { expect(true).toBeFalsy(); done(); });
  });

  it ('should return false with permitted input', (done: DoneFn) => {
    const service: PredictorService = TestBed.get(PredictorService);
    service
      .predict(permittedLicenseInput)
      .then(bool => { expect(bool).toBeFalsy(); done(); })
      .catch(_ => { expect(true).toBeFalsy(); done(); });
  })
});
