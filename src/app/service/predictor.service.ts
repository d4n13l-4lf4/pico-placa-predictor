import { Injectable } from '@angular/core';
import {WeekdayLicenseService} from "./weekday-license.service";
import {ILicensePlatePredict} from "../model/ILicensePlatePredict";
import {Utils} from "../utilities/util";
import {Weekday} from "../enum/Weekday";

@Injectable({
  providedIn: 'root'
})
export class PredictorService {

  constructor(private readonly _weekdayLicenseService: WeekdayLicenseService) { }

  predict(licensePlatePredict: ILicensePlatePredict): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      const weekdayLicensesSubscriber = this._weekdayLicenseService.getWeekdayLicenses();

      weekdayLicensesSubscriber.subscribe(
        weekdayLicenses => {
          if (!!!weekdayLicenses.length) {
            return reject(`Couldn't get enough data for validation!`);
          }

          let weekday: Weekday = Utils.getWeekday(licensePlatePredict.date);
          let check = weekdayLicenses.filter(wl => wl.weekday === weekday );

          if (check) {

          }

          resolve(true);
        },
        error => {
          reject(`Error: ${error}`);
        });
    });
  }

}
