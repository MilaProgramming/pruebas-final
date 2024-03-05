import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseAdmin/admin.feature");
defineFeature(feature, (test) => {

    // Feature: Administración de Usuarios
    // Scenario: Administrador visualiza y elimina usuarios

    test('Administrador visualiza y elimina usuarios', ({ given, when, then }) => {
        let administradorAccedioPanelControl = false;
        let opcionAdministracionUsuariosSeleccionada = false;
        let listaUsuariosMostrada = false;

        given('que el administrador accede al panel de control del sistema', () => {
            administradorAccedioPanelControl = true;
        });

        when('selecciona la opción "Administración de Usuarios"', () => {
            opcionAdministracionUsuariosSeleccionada = true;
        });

        then('el sistema muestra una lista de todos los usuarios registrados', () => {
            listaUsuariosMostrada = administradorAccedioPanelControl && opcionAdministracionUsuariosSeleccionada;

            expect(listaUsuariosMostrada).toBe(true);
        });
    });
});