import { defineFeature, loadFeature } from "jest-cucumber";
import axios from "axios";


const feature = loadFeature("./Tests/caseValidate/validate.feature");

defineFeature(feature, (test) => {
  interface Usuario {
    usuario: string;
    contrasena: string;
    rol: string;
  }

  let usuariosEnBD: Usuario[] = [];
  let clienteAccedio = false;
  let botonRegistrarsePresionado = false;
  let nombreUsuario = "";
  let contrasena = "";
  let botonAceptarPresionado = false;

  test("El Sistema permite Registrarse", ({ given, when, and, then }) => {
    given("El cliente accede al sistema", async () => {
      try {
        const response = await axios.get("http://localhost:8000/usuarios");

        if (response && response.data) {
          usuariosEnBD = response.data;
          clienteAccedio = true;
        } else {
          console.error("La respuesta del servidor no tiene el formato esperado.");
        }
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      }
    });

    when("Presiona el botón registrarse", () => {
      botonRegistrarsePresionado = true;
    });

    and("Ingresa el nombre de usuario y la contraseña", () => {
      nombreUsuario = "usuarioPrueba";
      contrasena = "contrasena2";
    });

    and(/^Presiona el botón "(.*)"$/, (boton) => {
      botonAceptarPresionado = true;
    });

    then("El sistema permite el registro del usuario", async () => {
      // Espera hasta que se cumplan todas las promesas pendientes
      await Promise.resolve();

      expect(clienteAccedio).toBe(true);
      expect(botonRegistrarsePresionado).toBe(true);
      expect(botonAceptarPresionado).toBe(true);

      const axiosPostSpy = jest.spyOn(axios, 'post');

      const usuarioExistente = usuariosEnBD.some((usuario) => usuario.usuario === nombreUsuario);

      if (!usuarioExistente) {
        await axios.post("http://localhost:8000/usuarios", {
          usuario: nombreUsuario,
          contrasena: contrasena,
          rol: "cliente",
        });
      }

      expect(axiosPostSpy).toHaveBeenCalled();
      axiosPostSpy.mockRestore();
    });
  });
});