import { Component, OnInit } from '@angular/core';
import {ILicensePlatePredict} from "../../model/ILicensePlatePredict";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../../validator/custom-validators";
import {PredictorService} from "../../service/predictor.service";

@Component({
  selector: 'app-pico-placa',
  templateUrl: './pico-placa.component.html',
  styleUrls: ['./pico-placa.component.css']
})
export class PicoPlacaComponent implements OnInit {

  licensePlateInput: ILicensePlatePredict;
  forbiddenLicense: boolean;
  predictForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _predictService: PredictorService) {
    this.licensePlateInput = {
      licensePlate: '',
      date: '',
      time: ''
    };
    this.predictForm = this._fb.group({
      'licensePlate': this._fb.control(
        this.licensePlateInput.licensePlate,
        [
          Validators.required,
          CustomValidator.licensePlateValidator()
        ]),
      'date': this._fb.control(
        this.licensePlateInput.date,
        [
          Validators.required,
          CustomValidator.dateValidator()
        ]),
      'time': this._fb.control(
        this.licensePlateInput.time,
        [
          Validators.required,
          CustomValidator.timeValidator()
        ])
    });
  }

  ngOnInit() {
  }

  predictPicoPlaca() {
    this.forbiddenLicense = true;

    let valid = this.predictForm.valid;

    if (valid) {

      let licenseInput: ILicensePlatePredict = {
        licensePlate: this.predictForm.get("licensePlate").value,
        date: this.predictForm.get("date").value,
        time: this.predictForm.get("time").value,
      };

      console.log(licenseInput);

      const promise = this._predictService.predict(licenseInput)
      promise.then(fb => this.forbiddenLicense = fb);
    }
  }

  resetForm() {
    this.predictForm.reset();
    this.forbiddenLicense = undefined;
  }

  get licensePlate() { return this.predictForm.get('licensePlate'); }

  get date() { return this.predictForm.get("date"); }

  get time() { return this.predictForm.get("time"); }

}
