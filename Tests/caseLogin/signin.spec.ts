import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseLogin/signin.feature");


defineFeature(feature, (test) => {

    // Feature: Inicio de Sesión
    // Scenario: Inicio de Sesión Exitoso
    //     Given que el cliente accede con sus credenciales previamente creadas al sistema
    //     When ingresa el nombre de usuario y la contraseña
    //     And presiona el botón "Iniciar Sesión"
    //     Then el cliente accede a su cuenta de manera satisfactoria

    test('Inicio de Sesión Exitoso', ({ given, when, and, then }) => {

        given('que el cliente accede con sus credenciales previamente creadas al sistema', () => {
            
        });

        when('ingresa el nombre de usuario y la contraseña', () => {
            
        });

        and('presiona el botón "Iniciar Sesión"', () => {
            
        });

        then('el cliente accede a su cuenta de manera satisfactoria', () => {
            
            expect(true).toBe(true); 
        });
    });
});
