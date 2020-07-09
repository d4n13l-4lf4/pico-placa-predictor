import * as moment from 'moment';
import {Weekday} from '../enum/Weekday';
import {DATE_FORMAT} from './global';


function getWeekday(date: string): {error?: string} | Weekday {
  try {
    const isoWeekday: number = moment(date, DATE_FORMAT, true).isoWeekday();
    switch(isoWeekday) {
      case Weekday.Monday:
        return Weekday.Monday;
      case Weekday.Tuesday:
        return Weekday.Tuesday;
      case Weekday.Wednesday:
        return Weekday.Wednesday;
      case Weekday.Thursday:
        return Weekday.Thursday;
      case Weekday.Friday:
        return Weekday.Friday;
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
