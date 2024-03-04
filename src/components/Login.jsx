import React, { useEffect, useState } from "react";
import ValidacionUsuario from "../class/usuario";
import { useForm } from "../hook/useForm";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const { usuario, contrasena, onInputChange } = useForm({
    usuario: "",
    contrasena: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", usuario);
    alert("Si se logeo jeje");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <section className="login-contenedor">
        <div className="login">
          <div className="titulo" style={{ cursor: "default" }}>
            Iniciar sesion
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
            {error && (
              <p className="error" style={{ color: "red" }}>
                {error}
              </p>
            )}
          </form>
          <p>
            No tienes cuenta? <a href="/register">Registrate</a>
          </p>
        </div>
      </section>
    </>
  );
};
