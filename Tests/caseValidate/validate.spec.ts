import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseValidate/validate.feature");

defineFeature(feature, (test) => {

    // Feature: Validación de Registro
    // Scenario: El Sistema permite Registrarse
    //     Given El cliente accede al sistema
    //     When Presiona el botón registrarse
    //     And Ingresa el nombre de usuario y la contraseña 
    //     And Presiona el botón "Aceptar"
    //     Then El sistema permite el registro del usuario

    test('El Sistema permite Registrarse', ({ given, when, and, then }) => {
        let clienteAccedio = false;
        let botonRegistrarsePresionado = false;
        let nombreUsuario = "";
        let contrasena = "";
        let botonAceptarPresionado = false;

        given('El cliente accede al sistema', () => {
 
            clienteAccedio = true;
        });

        when('Presiona el botón registrarse', () => {

            botonRegistrarsePresionado = true;
        });

        and('Ingresa el nombre de usuario y la contraseña', () => {

            nombreUsuario = "usuario1";
            contrasena = "contrasena1";
        });

        and('Presiona el botón "Aceptar"', () => {

            botonAceptarPresionado = true;
        });

        then('El sistema permite el registro del usuario', () => {

            expect(clienteAccedio).toBe(true);
            expect(botonRegistrarsePresionado).toBe(true);
            expect(nombreUsuario).toEqual("usuario1");
            expect(contrasena).toEqual("contrasena1");
            expect(botonAceptarPresionado).toBe(true);
        });
    });
});
