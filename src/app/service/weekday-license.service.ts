import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IWeekdayLicense} from "../model/IWeekdayLicense";
import {Weekday} from "../enum/Weekday";

@Injectable({
  providedIn: 'root'
})
export class WeekdayLicenseService {

  MILLISECONDS_DELAY: number = 3000;
  WEEKDAY_LICENSES: Array<IWeekdayLicense>;

  constructor() {
    this.WEEKDAY_LICENSES = [
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
    ];
  }

  /**
   * Mocks a database request for data
   */
  getWeekdayLicenses(): Observable<Array<IWeekdayLicense>> {
    return new Observable<Array<IWeekdayLicense>>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.WEEKDAY_LICENSES);
        subscriber.complete();
      }, this.MILLISECONDS_DELAY);
    });
  }

}
