import {ForbiddenSlot} from './ForbiddenSlot';
import {WeekdayLicense} from './WeekdayLicense';

export interface PredictData {
  forbiddenSlots: Array<ForbiddenSlot>;
  weekdayLicenses: Array<WeekdayLicense>;
}
