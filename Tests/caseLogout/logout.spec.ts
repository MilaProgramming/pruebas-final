import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseLogout/logout.feature");

defineFeature(feature, (test) => {

    // Feature: Cerrar Sesión
    // Scenario: validacion de Cerrar Sesión

    test('validacion de Cerrar Sesión', ({ given, when, and, then }) => {
        let usuarioAccediendoSistema = false;
        let botonCerrarSesionPresionado = false;
        let sistemaCierraSesionUsuario = false;
        let confirmacionCierreSesionPresentada = false;

        given('que el usuario está accediendo al sistema', () => {
            usuarioAccediendoSistema = true;
        });

        when('el usuario presiona el botón "Cerrar Sesión"', () => {
            botonCerrarSesionPresionado = true;
        });

        and('el sistema cierra la sesión del usuario', () => {
            sistemaCierraSesionUsuario = true;
        });

        then('el sistema debe presentar una confirmación para cerrar la sesión', () => {

            confirmacionCierreSesionPresentada = usuarioAccediendoSistema && botonCerrarSesionPresionado && sistemaCierraSesionUsuario;

            expect(confirmacionCierreSesionPresentada).toBe(true);
        });
    });
});
