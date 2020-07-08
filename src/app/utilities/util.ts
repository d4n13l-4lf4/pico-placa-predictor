import * as moment from 'moment';
import {Weekday} from '../enum/Weekday';
import {DATE_FORMAT} from './global';


function getWeekday(date: string): Weekday {
  try {
    const isoWeekday: number = moment(date, DATE_FORMAT, true).isoWeekday();
    switch(isoWeekday) {
      case Weekday.MONDAY:
        return Weekday.MONDAY;
      case Weekday.TUESDAY:
        return Weekday.TUESDAY;
      case Weekday.WEDNESDAY:
        return Weekday.WEDNESDAY;
      case Weekday.THURSDAY:
        return Weekday.THURSDAY;
      case Weekday.FRIDAY:
        return Weekday.FRIDAY;
      default:
        return null;
    }
  } catch (e) {
    return null;
  }
}

export const Utils = {
  getWeekday
};
