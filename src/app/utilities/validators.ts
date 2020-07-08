import * as moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';
const LICENSE_PLATE_REGEX = /^[A-Za-z]{3}-\d{3,4}$/
const TIME_REGEX = /^[012345]\d:[012345]\d$/;


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
