import React, { useState } from "react";
import { useForm } from "../hook/useForm";

export const Register = () => {
  const [usuarios, setUsuarios] = useState([]);

  const { usuario, contrasena, onInputChange} =
    useForm({
      usuario: "",
      contrasena: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Agregar el nuevo usuario y contraseña al estado
    setUsuarios([...usuarios, { usuario, contrasena }]);
    alert("Usuario registrado correctamente.");
  };

  return (
    <>
      <section className="login">
        <div className="titulo" style={{ cursor: "default" }}>
          Registrarse
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="GET-usuario" style={{ marginRight: "80px" }}>
            Usuario
          </label>
          <input
            id="GET-usuario"
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={usuario}
            onChange={onInputChange}
            required
          />
          <br />
          <label htmlFor="GET-contrasena" style={{ marginRight: "48px" }}>
            Contraseña
          </label>
          <input
            id="GET-contrasena"
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
        <p>Tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </section>
    </>
  );
};
