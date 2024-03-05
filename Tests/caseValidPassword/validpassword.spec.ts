import { defineFeature, loadFeature } from "jest-cucumber";
let validacionClave = require('../../src/functions/validacionClave');
const feature = loadFeature("./Tests/caseValidPassword/validpassword.feature");


defineFeature(feature, (test) => {

    // Feature: verificar que la contraseña contenga al menos 8 caracteres, una mayúscula y una minúscula.

    // Scenario: La funcion de validacion de clave
    //     Given Una string que actua de clave
    //     When Verifico con la función de validación
    //     Then La clave debe tener al menos 8 caracteres, una mayúscula y una minúscula

    test('La funcion de validacion de clave', ({ given, when, then }) => {
        let clave = "";
        let resultado = false;

        given('Una string que actua de clave', () => {
            clave = "Clave123";
        });

        when('Verifico con la función de validación', () => {
            resultado = validacionClave(clave);
        });

        then('La clave debe tener al menos 8 caracteres, una mayúscula y una minúscula', () => {
            expect(resultado).toBe(true);
        });
    }); 
}
);
