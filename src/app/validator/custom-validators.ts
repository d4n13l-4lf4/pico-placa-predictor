import {AbstractControl, ValidatorFn} from "@angular/forms";
import {DateValidators, LicensePlateValidators} from "../utilities/validators";

function licensePlateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const licensePlate: string = control.value;
    const valid: boolean = LicensePlateValidators.validateLicensePlate(licensePlate);
    return !valid ? {'invalidLicense': {value: control.value }} : null;
  }
}

function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const date: string = control.value;
    const valid: boolean = DateValidators.validateDate(date);
    return !valid ? {'invalidDate': {value: control.value}} : null;
  }
}

function timeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const time: string = control.value;
    const valid: boolean = DateValidators.validateTime(time);
    return !valid ? {'invalidTime': {value: control.value}} : null;
  }
}

export const CustomValidator = {
  licensePlateValidator,
  dateValidator,
  timeValidator
};
