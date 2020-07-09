import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Weekday} from '../enum/Weekday';
import {PredictData} from '../model/PredictData';

@Injectable({
  providedIn: 'root'
})
export class PredictDataService {

  MILLISECONDS_DELAY = 1500;
  PREDICT_DATA: PredictData;

  constructor() {
    this.PREDICT_DATA = {
      weekdayLicenses: [
        {weekday: Weekday.Monday, lastLicenseDigit: 1},
        {weekday: Weekday.Monday, lastLicenseDigit: 2},
        {weekday: Weekday.Tuesday, lastLicenseDigit: 3},
        {weekday: Weekday.Tuesday, lastLicenseDigit: 4},
        {weekday: Weekday.Wednesday, lastLicenseDigit: 5},
        {weekday: Weekday.Wednesday, lastLicenseDigit: 6},
        {weekday: Weekday.Thursday, lastLicenseDigit: 7},
        {weekday: Weekday.Thursday, lastLicenseDigit: 8},
        {weekday: Weekday.Friday, lastLicenseDigit: 9},
        {weekday: Weekday.Friday, lastLicenseDigit: 0}
      ],
      forbiddenSlots: [
        {startTime: '07:00', endTime: '09:30'},
        {startTime: '16:00', endTime: '19:30'}
      ]
    };
  }

  /**
   * Mocks a request for data perhaps to a REST endpoint
   */
  getPredictData(): Observable<PredictData> {
    return new Observable<PredictData>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.PREDICT_DATA);
        subscriber.complete();
      }, this.MILLISECONDS_DELAY);
    });
  }

}
