import { TestBed } from '@angular/core/testing';

import { PredictDataService } from './predict-data.service';

describe('PredictDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictDataService = TestBed.get(PredictDataService);
    expect(service).toBeTruthy();
  });

  it('should return predict data', (done: DoneFn) => {
    const service: PredictDataService = TestBed.get(PredictDataService);
    service
      .getPredictData()
      .subscribe(
        data => {
          expect(data).toBeTruthy();
          done();
        },
        _ => {
          expect(false).toBeTruthy();
          done();
        }
      )
  });
});
