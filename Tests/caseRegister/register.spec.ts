import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseRegister/register.feature");


defineFeature(feature, (test) => {

    // Feature: Registro de Usuario
    // Scenario: Registro de Usuario Exitoso

    test('Registro de Usuario Exitoso', ({ given, when, and, then }) => {
        let clienteAccedioSistema = false;
        let campoUsuarioCompletado = false;
        let campoContraseñaCompletado = false;
        let botonRegistrarPresionado = false;
        let respuestaSistemaCorrecta = false;

        given('que el cliente accede al sistema', () => {
            clienteAccedioSistema = true;
        });

        when(/^completa el campo de usuario con "(.*)"$/, (usuario) => {
            if (usuario === "admin") {
                campoUsuarioCompletado = true;
            }
        });

        and(/^completa el campo de contraseña con "(.*)"$/, (contraseña) => {
            if (contraseña === "admin") {
                campoContraseñaCompletado = true;
            }
        });

        and('presiona el botón "Registrar"', () => {

            botonRegistrarPresionado = true;
        });

        then('el sistema responde de manera correcta', () => {

            respuestaSistemaCorrecta = clienteAccedioSistema && campoUsuarioCompletado && campoContraseñaCompletado && botonRegistrarPresionado;


            expect(respuestaSistemaCorrecta).toBe(true);
        });
    });
});
