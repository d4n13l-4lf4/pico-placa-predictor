import { Injectable } from '@angular/core';
import {PredictDataService} from './predict-data.service';
import {LicensePlatePredict} from '../model/LicensePlatePredict';
import {Utils} from '../utilities/util';
import {timeBetween} from '../utilities/validators';

@Injectable({
  providedIn: 'root'
})
export class PredictorService {

  constructor(private readonly predictDataService: PredictDataService) { }

  predict(licensePlatePredict: LicensePlatePredict): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const predictDataSubscriber = this.predictDataService.getPredictData();

      predictDataSubscriber.subscribe(
        predictData => {
          const weekdayLicenses = predictData.weekdayLicenses;
          const forbiddenSlots = predictData.forbiddenSlots;

          if (!forbiddenSlots && !weekdayLicenses) {
            return reject(`Error: couldn't get data for validation`);
          }

          const weekdayToCheck = Utils.getWeekday(licensePlatePredict.date);
          const lastDigit = licensePlatePredict.licensePlate.slice(-1);

          const checkSlots = weekdayLicenses
            .filter(w => w.weekday === weekdayToCheck && w.lastLicenseDigit === Number(lastDigit))
            .length > 0;

          if (checkSlots) {
            const forbidden = forbiddenSlots
              .reduce((ac, cv) => {
                  const comparison = timeBetween(licensePlatePredict.time, cv.startTime, cv.endTime);
                  if (typeof comparison === 'object') {
                    return ac || true;
                  }
                  if (typeof comparison === 'boolean') {
                    return ac || comparison;
                  }

              }, false);
            return resolve(forbidden);
          }

          return resolve(false);
        },
        error => {
          reject(`Error: ${error}`);
        });
    });
  }

}
