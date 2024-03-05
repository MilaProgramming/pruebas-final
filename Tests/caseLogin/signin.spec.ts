import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseLogin/signin.feature");

defineFeature(feature, (test) => {

    // Feature: Inicio de Sesión
    // Scenario: Inicio de Sesión Exitoso

    test('Inicio de Sesión Exitoso', ({ given, when, and, then }) => {
        let clienteAccedioSistema = false;
        let credencialesIngresadas = false;
        let botonInicioSesionPresionado = false;
        let accesoExitoso = false;

        given('que el cliente accede con sus credenciales previamente creadas al sistema', () => {
            clienteAccedioSistema = true;
        });

        when('ingresa el nombre de usuario y la contraseña', () => {
              credencialesIngresadas = true;
        });

        and('presiona el botón "Iniciar Sesión"', () => {
            botonInicioSesionPresionado = true;
        });

        then('el cliente accede a su cuenta de manera satisfactoria', () => {
            accesoExitoso = clienteAccedioSistema && credencialesIngresadas && botonInicioSesionPresionado;
            
            expect(accesoExitoso).toBe(true);
        });
    });
});
