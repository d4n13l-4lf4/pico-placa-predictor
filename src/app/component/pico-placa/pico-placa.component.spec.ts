import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaComponent } from './pico-placa.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('PicoPlacaComponent', () => {
  let component: PicoPlacaComponent;
  let fixture: ComponentFixture<PicoPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoPlacaComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have invalid form when invalid data is typed', () => {
    component.predictForm.controls['time'].setValue('23-asd');
    expect(component.predictForm.invalid);
  });

  it ('should have date with required and valid date errors', () => {
    expect(component.predictForm.controls['date'].errors.required).toBeTruthy();
    component.predictForm.controls['date'].setValue('as1j1aa  ');
    expect(component.predictForm.controls['date'].errors.invalidDate).toBeTruthy();
  });
});
