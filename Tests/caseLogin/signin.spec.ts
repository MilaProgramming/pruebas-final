import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseLogin/signin.feature");
let ValidacionUsuario = require('../../src/class/usuario');

defineFeature(feature, (test) => {

    // Feature: Inicio de Sesión
    // Scenario: Inicio de Sesión Exitoso

    test('Inicio de Sesión Exitoso', ({ given, when, and, then }) => {
        const validador = new ValidacionUsuario();
        let listaUsuarios =[];
        let valida = false;

        given('el sistema verifica que haya credenciales en su array', () => {
            listaUsuarios = validador.usuarios;

            expect(Array.isArray(listaUsuarios)).toBe(true);
            expect(listaUsuarios.length).toBeGreaterThan(0);
        });

        when('ingresa el nombre de usuario y la contraseña', () => {
            validador.setUsuario("usuario1");
            validador.setContrasena("contrasena1");
        });

        then('el cliente accede a su cuenta de manera satisfactoria', () => {
            validador.validacionUsuario();
            valida = validador.getValido();            
            expect(valida).toBe(true);
        });
    });
});
