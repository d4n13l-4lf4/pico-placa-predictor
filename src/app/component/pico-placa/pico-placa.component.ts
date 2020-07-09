import { Component, OnInit } from '@angular/core';
import {LicensePlatePredict} from '../../model/LicensePlatePredict';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validators';
import {PredictorService} from '../../service/predictor.service';

@Component({
  selector: 'app-pico-placa',
  templateUrl: './pico-placa.component.html',
  styleUrls: ['./pico-placa.component.css']
})
export class PicoPlacaComponent implements OnInit {

  licensePlateInput: LicensePlatePredict;
  forbiddenLicense: boolean;
  predictForm: FormGroup;
  error: boolean;
  loading: boolean;

  constructor(private fb: FormBuilder,
              private predictorService: PredictorService) {
    this.licensePlateInput = {
      licensePlate: '',
      date: '',
      time: ''
    };
    this.error = false;
    this.loading = false;
  }

  ngOnInit() {
    this.createPredictForm();
  }

  predictPicoPlaca() {
    const valid = this.predictForm.valid;

    if (valid) {
      const licenseInput: LicensePlatePredict = {
        licensePlate: this.predictForm.get('licensePlate').value,
        date: this.predictForm.get('date').value,
        time: this.predictForm.get('time').value,
      };

      this.loading = true;
      const promise = this.predictorService.predict(licenseInput);
      promise.then(fb => this.forbiddenLicense = fb);
      promise.catch(err => this.error = true);
      promise.finally(() => this.loading = false);
    }
  }

  resetForm() {
    this.predictForm.reset();
    this.forbiddenLicense = undefined;
  }

  createPredictForm() {
    this.predictForm = this.fb.group({
      licensePlate: this.fb.control(
        this.licensePlateInput.licensePlate,
        [
          Validators.required,
          CustomValidator.licensePlateValidator()
        ]),
      date: this.fb.control(
        this.licensePlateInput.date,
        [
          Validators.required,
          CustomValidator.dateValidator()
        ]),
      time: this.fb.control(
        this.licensePlateInput.time,
        [
          Validators.required,
          CustomValidator.timeValidator()
        ])
    });
  }

  get licensePlate() { return this.predictForm.get('licensePlate'); }

  get date() { return this.predictForm.get('date'); }

  get time() { return this.predictForm.get('time'); }

}
