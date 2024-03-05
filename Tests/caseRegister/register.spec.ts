import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseRegister/register.feature");

defineFeature(feature, (test) => {

    // Feature: Cedula valida
    // Scenario: validacion de cedula
    //     Given un string que contiene la cedula de un cliente
    //     When verifico la cedula creando el objeto verificador
    //     Then la cedula es valida

    test('validacion de cedula', ({ given, when, then }) => {

        given('un string que contiene la cedula de un cliente', () => {
            
        });

        when('verifico la cedula creando el objeto verificador', () => {
          
        });

        then('la cedula es valida', () => {
            expect(true).toBe(true);
        });
    });
});
    



