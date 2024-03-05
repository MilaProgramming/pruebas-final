const { Builder, By, until } = require('selenium-webdriver');


(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();


    await driver.get('http://localhost:3000/login');


    // relleno mis datos
    const nombreInputElement = await driver.wait(until.elementLocated(By.name('usuario')));
    const claveInputElement = await driver.wait(until.elementLocated(By.name('contrasena')));

    await nombreInputElement.sendKeys('admin');
    await claveInputElement.sendKeys('admin123');


    const iniciarButton = await driver.wait(until.elementLocated(By.name('boton')));
    await iniciarButton.click();
 
})();