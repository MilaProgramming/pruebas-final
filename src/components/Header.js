import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/Header.css"; // Archivo CSS para estilos personalizados
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const Header = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  const handleCerrar = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Sobre nosotros</a>
            </li>
            <li>
              <a href="/">Comprar</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <button className="icon" title="Carrito">
            <FaShoppingCart className="icon" />
          </button>
          {!isLoggedIn ? (
            <Link to="/login">
              <button className="icon" title="Iniciar sesión" style={{display: "flex", alignItems: "center"}}>
                <FaUser className="icon" />
                <p>Iniciar sesion</p>
              </button>
            </Link>
          ) : (
            <>
            <button className="icon" title="Cerrar sesion" style={{display: "flex", alignItems: "center"}} onClick={handleCerrar}>
                <FaUser className="icon" />
                <p>{username}</p>
              </button>
              
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
