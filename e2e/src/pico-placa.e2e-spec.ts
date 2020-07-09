import { browser, logging } from 'protractor';
import {PicoPlacaPage} from "./pico-placa.po";

describe('Pico Placa e2e', () => {
  let page: PicoPlacaPage;

  beforeEach(() => {
    page = new PicoPlacaPage();
  });

  it('should display car with title message', () => {
    page.navigateTo();
    expect(page.getCardTitleText()).toEqual('Pico y Placa Predictor');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
