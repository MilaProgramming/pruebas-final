import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/casePassword/password.feature");

defineFeature(feature, (test) => {

    // Feature: Validación de contraseña
    // Scenario: El Sistema valida los requisitos de la contraseña
    //     Given El cliente ingresa el nombre de usuario y la contraseña
    //     When Presiona el botón "Aceptar"
    //     Then El sistema valida que la contraseña cumpla los requisitos

    test('El Sistema valida los requisitos de la contraseña', ({ given, when, then }) => {
        let clienteIngresoDatos = false;
        let botonAceptarPresionado = false;
        let validacionContraseñaExitosa = false;

        given('El cliente ingresa el nombre de usuario y la contraseña', () => {
            clienteIngresoDatos = true;
        });

        when('Presiona el botón "Aceptar"', () => {

            botonAceptarPresionado = true;
        });

        then('El sistema valida que la contraseña cumpla los requisitos', () => {
            const contraseñaIngresada = "contraseña123";
            validacionContraseñaExitosa = contraseñaIngresada.length >= 8 && /[A-Z]/.test(contraseñaIngresada);
            
            expect(clienteIngresoDatos).toBe(true);
            expect(botonAceptarPresionado).toBe(true);
            expect(validacionContraseñaExitosa).toBe(true);
        });
    });
});
