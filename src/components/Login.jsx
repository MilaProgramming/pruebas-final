import React, { useState } from "react";
import ValidacionUsuario from "../class/usuario";
import { useForm } from "../hook/useForm";

export const Login = () => {
  const [error, setError] = useState("");

  const {usuario, contrasena, onInputChange} =
    useForm({
      usuario: '',
      contrasena: '',
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    const validador = new ValidacionUsuario();
    validador.setUsuario(usuario);
    validador.setContrasena(contrasena);
    validador.validacionUsuario();
    const usuarioValido = validador.getValido();

    if (!usuarioValido) {
      setError("*Usuario o Contraseña inválida.");
      return;
    }

    alert("Si se logeo jeje")
  };

  return (
    <>
      <section className="login">
        <div className="titulo" style={{ cursor: "default" }}>
          I N I C I A R &nbsp; S E S I Ó N
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="GET-usuario" style={{ marginRight: "80px" }}>
            Usuario
          </label>
          <input
            id="GET-cedula"
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
            placeholder="contrasena"
            value={contrasena}
            onChange={onInputChange}
            required
          />
          <br />
          <button type="submit">Aceptar</button>
          {error && <p className="error" style={{color: "red"}}>{error}</p>}
        </form>
      </section>
    </>
  );
};
