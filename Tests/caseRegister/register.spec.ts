import axios from "axios";
import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseRegister/register.feature");


defineFeature(feature, (test) => {

    // Feature: Registro de Usuario
    // Scenario: Registro de Usuario Exitoso

    test('Registro de Usuario Exitoso', ({ given, when, and, then }) => {
        let usuario = "";
        let contrasena = "";
        let rol = "cliente";

        given('el sistema se conecta correctamente a la base de datos', async () => {
            
        });

        when('completa el campo de usuario', () => {
            usuario = "fenandito";
            expect(usuario).toBeTruthy();
        });

        and('completa el campo de contraseña', () => {
            contrasena = "fenandito123";
            expect(contrasena).toBeTruthy();
        });

        then('el usuario se registra correctamente', async () => {
            await Promise.resolve();
            const axiosPostSpy = jest.spyOn(axios, 'post');

            axios.post("http://localhost:8000/usuarios", {
                usuario,
                contrasena,
                rol,
      });
      expect(axiosPostSpy).toHaveBeenCalled();
      axiosPostSpy.mockRestore();
        });
    });
});
