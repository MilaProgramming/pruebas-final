import React from "react";
import { useForm } from "../hook/useForm";
import axios from "axios";

export const Register = () => {
  const { usuario, contrasena, rol, onInputChange } = useForm({
    usuario: "",
    contrasena: "",
    rol: "cliente"
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realizar la solicitud POST al servidor Express
      await axios.post("http://localhost:8000/usuarios", {
        usuario,
        contrasena,
        rol
      });

      // Actualizar el estado local o realizar cualquier acción adicional si es necesario
      alert("Usuario registrado correctamente.");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
      <section className="login-contenedor">
        <div className="login">
          <div className="titulo" style={{ cursor: "default" }}>
            Registrarse
          </div>
          <form onSubmit={handleSubmit}>
            <label style={{ marginRight: "80px" }}>
              Usuario
            </label>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={usuario}
              onChange={onInputChange}
              required
            />
            <br />
            <label style={{ marginRight: "48px" }}>
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={contrasena}
              onChange={onInputChange}
              required
            />
            <br />
            <button type="submit">Aceptar</button>
          </form>
          <p>
            Tienes cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </section>
    </>
  );
};
