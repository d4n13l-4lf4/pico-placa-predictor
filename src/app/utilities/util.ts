import * as moment from 'moment';
import {Weekday} from '../enum/Weekday';
import {DATE_FORMAT} from './global';


function getWeekday(date: string): {error?: string} | Weekday {
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
        return {error: `Couldn't match a valid Weekday`};
    }
  } catch (e) {
    return {error: e};
  }
}

export const Utils = {
  getWeekday
};
