import * as moment from 'moment';
import {DATE_FORMAT, LICENSE_PLATE_REGEX, TIME_REGEX} from "./global";

export function validateLicensePlate(licensePlate: string): boolean {
    if (typeof licensePlate !== 'string') {
      return false;
    }
    return LICENSE_PLATE_REGEX.test(licensePlate);
}

export function validateDate(date: string): boolean {
  return moment(`${date}`, DATE_FORMAT, true).isValid();
}


export function validateTime(time: string): boolean {
  return TIME_REGEX.test(time);
}
