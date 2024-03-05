import React, { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { usuario, contrasena, rol, onInputChange } = useForm({
    usuario: "",
    contrasena: "",
    rol: "cliente",
  });

  const [contrasenaValida, setContrasenaValida] = useState(true); 

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let validacionClave = require('../functions/validacionClave');
    // Validar la contraseña
    if (!validacionClave(contrasena)) {
      setContrasenaValida(false);
      return;
    }

    try {
      // Realizar la solicitud POST al servidor Express
      await axios.post("http://localhost:8000/usuarios", {
        usuario,
        contrasena,
        rol,
      });

      // Actualizar el estado local o realizar cualquier acción adicional si es necesario
      alert("Usuario registrado correctamente.");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", usuario);
      localStorage.setItem("rol", rol);
      navigate("/");
      window.location.reload();
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
            <label style={{ marginRight: "80px" }}>Usuario</label>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={usuario}
              onChange={onInputChange}
              required
            />
            <br />
            <label style={{ marginRight: "48px" }}>Contraseña</label>
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={contrasena}
              onChange={onInputChange}
              required
            />
            {!contrasenaValida && <p style={{ color: 'red' }}>La contraseña debe tener al menos 8 caracteres y contener una letra mayúscula y una minúscula.</p>}
            <br />
            <button type="submit" name ='boton'>Aceptar</button>
          </form>
          <p>
            ¿Tienes una cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </section>
    </>
  );
};
