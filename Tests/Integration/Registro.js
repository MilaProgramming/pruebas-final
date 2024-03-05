const { Builder, By, until } = require('selenium-webdriver');


(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();


    await driver.get('http://localhost:3000/register');


    // relleno mis datos
    const nombreInputElement = await driver.wait(until.elementLocated(By.name('usuario')));
    const claveInputElement = await driver.wait(until.elementLocated(By.name('contrasena')));

    await nombreInputElement.sendKeys('test');
    await claveInputElement.sendKeys('ABC123abc');


    const iniciarButton = await driver.wait(until.elementLocated(By.name('boton')));
    await iniciarButton.click();
 
})();