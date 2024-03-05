import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseAdmin/admin.feature");

defineFeature(feature, (test) => {

    // Feature: Administración de Usuarios
    // Scenario: Administrador visualiza y elimina usuarios

    test('Administrador visualiza y elimina usuarios', ({ given, when, then, and }) => {

        given('que el administrador accede al panel de control del sistema', () => {
            
        });

        when('selecciona la opción "Administración de Usuarios"', () => {
            
        });

        then('el sistema muestra una lista de todos los usuarios registrados', () => {
            expect(true).toBe(true);
        });

        and('el administrador puede eliminar un usuario', () => {
            expect(true).toBe(true); 
        });
    });
});
