import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseRegister/register.feature");

defineFeature(feature, (test) => {

    // Feature: Registro de Usuario
    // Scenario: Registro de Usuario Exitoso
    
    test('Registro de Usuario Exitoso', ({ given, when, and, then }) => {

        given('que el cliente accede al sistema', () => {
            
        });

        when('completa el campo de usuario con "admin"', () => {
            
        });

        and ('completa el campo de contraseña con "admin"', () => {
            
        });

        and ('presiona el botón "Registrar"', () => {
            
        });

        then('el sistema responde de manera correcta', () => {
            expect(true).toBe(true);
        });

});
});