import { Component, OnInit } from '@angular/core';
import {ILicensePlatePredict} from "../../model/ILicensePlatePredict";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../../validator/custom-validators";

@Component({
  selector: 'app-pico-placa',
  templateUrl: './pico-placa.component.html',
  styleUrls: ['./pico-placa.component.css']
})
export class PicoPlacaComponent implements OnInit {

  licensePlateInput: ILicensePlatePredict;
  forbiddenLicense: boolean;
  predictForm: FormGroup;

  constructor(private _fb: FormBuilder) {
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
    console.log('Forbidden');
    this.forbiddenLicense = true;
  }

  get licensePlate() { return this.predictForm.get('licensePlate'); }

  get date() { return this.predictForm.get("date"); }

  get time() { return this.predictForm.get("time"); }

}
