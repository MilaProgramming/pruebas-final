const { Builder, By, until } = require('selenium-webdriver');


(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();


    await driver.get('http://localhost:3000');


    // relleno mis datos
    const nombreInputElement = await driver.wait(until.elementLocated(By.name('busqueda')));

    await nombreInputElement.sendKeys('labial');


    // Espero a que se llenen para mandarlos
    // const guardarButton = await driver.wait(until.elementLocated(By.name('guardar')));
    // await guardarButton.click();
 
})();
