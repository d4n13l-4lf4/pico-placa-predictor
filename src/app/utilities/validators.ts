import * as moment from 'moment';
import {DATE_FORMAT, LICENSE_PLATE_REGEX, TIME_FORMAT, TIME_REGEX} from './global';

function validateLicensePlate(licensePlate: string): boolean {
    if (typeof licensePlate !== 'string') {
      return false;
    }
    return LICENSE_PLATE_REGEX.test(licensePlate);
}

function validateDate(date: string): boolean {
  return moment(`${date}`, DATE_FORMAT, true).isValid();
}


function validateTime(time: string): boolean {
  return TIME_REGEX.test(time);
}

function timeBetween(time: string,
                            inclusiveStartTime: string,
                            inclusiveEndTime: string): {error?: string} | boolean {
  try {
    const timeToTest = moment(time, TIME_FORMAT, true);
    const startTime = moment(inclusiveStartTime, TIME_FORMAT, true);
    const endTime = moment(inclusiveEndTime, TIME_FORMAT, true);
    return timeToTest.isSameOrAfter(startTime) && timeToTest.isSameOrBefore(endTime);
  } catch (e) {
    return {error: e};
  }
}


export const DateValidators = {
  validateTime,
  validateDate,
  timeBetween
};

export const LicensePlateValidators = {
  validateLicensePlate
};
