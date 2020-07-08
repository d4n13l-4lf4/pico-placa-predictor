import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaComponent } from './pico-placa.component';

describe('PicoPlacaComponent', () => {
  let component: PicoPlacaComponent;
  let fixture: ComponentFixture<PicoPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoPlacaComponent ]
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
});
