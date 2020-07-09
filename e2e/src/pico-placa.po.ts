import { browser, by, element } from 'protractor';
import {URL} from "url";

export class PicoPlacaPage {
  path = new URL('pico-placa', browser.baseUrl).toString();

  navigateTo() {
    return browser.get(this.path) as Promise<any>;
  }

  getLicensePlateInput() {
    return element(by.id('licensePlate'));
  }

  getDateInput() {
    return element(by.id('date'));
  }

  getTimeInput() {
    return element(by.id('time'));
  }

  getPredictButton() {
    return element(by.id('predictButton'));
  }

  getCardTitleText() {
    return element(by.css('.card-header')).getText() as Promise<string>;
  }

  getPermittedMessage() {
    return element(by.css('.alert-success')).getText() as Promise<string>;
  }

  getForbiddenMessage() {
    return element(by.css('.alert-danger')).getText() as Promise<string>;
  }
}
