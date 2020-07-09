import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeekdayLicense} from '../model/WeekdayLicense';
import {Weekday} from '../enum/Weekday';
import {PredictData} from '../model/PredictData';

@Injectable({
  providedIn: 'root'
})
export class PredictDataService {

  MILLISECONDS_DELAY = 3000;
  PREDICT_DATA: PredictData;

  constructor() {
    this.PREDICT_DATA = {
      weekdayLicenses: [
        {weekday: Weekday.MONDAY, lastLicenseDigit: 1},
        {weekday: Weekday.MONDAY, lastLicenseDigit: 2},
        {weekday: Weekday.TUESDAY, lastLicenseDigit: 3},
        {weekday: Weekday.TUESDAY, lastLicenseDigit: 4},
        {weekday: Weekday.WEDNESDAY, lastLicenseDigit: 5},
        {weekday: Weekday.WEDNESDAY, lastLicenseDigit: 6},
        {weekday: Weekday.THURSDAY, lastLicenseDigit: 7},
        {weekday: Weekday.THURSDAY, lastLicenseDigit: 8},
        {weekday: Weekday.FRIDAY, lastLicenseDigit: 9},
        {weekday: Weekday.FRIDAY, lastLicenseDigit: 0}
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
