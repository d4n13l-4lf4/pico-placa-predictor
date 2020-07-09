import { browser, logging } from 'protractor';
import {PicoPlacaPage} from "./pico-placa.po";

describe('Pico Placa Test Suite', () => {
  let page: PicoPlacaPage;

  beforeEach(() => {
    page = new PicoPlacaPage();
  });

  it('should display car with title message', () => {
    page.navigateTo();
    expect(page.getCardTitleText()).toEqual('Pico y Placa Predictor');
  });


  it ('should have invalid inputs when invalid data is typed', () => {
    page.navigateTo();
    const licensePlateInput = page.getLicensePlateInput();
    const dateInput = page.getDateInput();
    const timeInput = page.getTimeInput();

    licensePlateInput.sendKeys('as.s-d.');
    dateInput.sendKeys('202021-');
    timeInput.sendKeys('saslñ-.');

    Promise.all([
      expect(licensePlateInput.getAttribute('class')).toContain('ng-invalid'),
      expect(dateInput.getAttribute('class')).toContain('ng-invalid'),
      expect(timeInput.getAttribute('class')).toContain('ng-invalid'),
    ]);
  });

  it ('should have valid inputs when valid data is typed', () => {
    page.navigateTo();
    const licensePlateInput = page.getLicensePlateInput();
    const dateInput = page.getDateInput();
    const timeInput = page.getTimeInput();

    licensePlateInput.sendKeys('ABC-1234');
    dateInput.sendKeys('2020-01-01');
    timeInput.sendKeys('07:30');

    Promise.all([
      expect(licensePlateInput.getAttribute('class')).toContain('ng-valid'),
      expect(dateInput.getAttribute('class')).toContain('ng-valid'),
      expect(timeInput.getAttribute('class')).toContain('ng-valid'),
    ]);
  });


  it ('should show the message that you are fine driving', () => {
    page.navigateTo();
    const expectedMessage = `You are fine driving your car at that time!`;
    const licensePlateInput = page.getLicensePlateInput();
    const dateInput = page.getDateInput();
    const timeInput = page.getTimeInput();
    const predictButton = page.getPredictButton();

    licensePlateInput.sendKeys('ABC-1234');
    dateInput.sendKeys('2020-08-11');
    timeInput.sendKeys('23:21');
    predictButton.click();

    const message = page.getPermittedMessage();
    expect(message).toBe(expectedMessage);
  });

  it ('should show the message that you shouldn\'t drive', () => {
    page.navigateTo();
    const expectedMessage = `You shouldn't drive your car at that time!`;
    const licensePlateInput = page.getLicensePlateInput();
    const dateInput = page.getDateInput();
    const timeInput = page.getTimeInput();
    const predictButton = page.getPredictButton();

    licensePlateInput.sendKeys('ABC-1235');
    dateInput.sendKeys('2020-07-08');
    timeInput.sendKeys('07:30');
    predictButton.click();

    const message = page.getForbiddenMessage();
    expect(message).toBe(expectedMessage);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
