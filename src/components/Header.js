import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Header.css'; // Archivo CSS para estilos personalizados
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <ul>
          <li><a href="*">Inicio</a></li>
          <li><a href="*">Sobre nosotros</a></li>
          <li><a href="*">Comprar</a></li>
        </ul>
      </div>
      <div className="icons">
        <button className="icon" title="Carrito">
            <FaShoppingCart className="icon" />
        </button>
        <button className="icon" title="Iniciar sesión">
            <FaUser className="icon" />
        </button>
      </div>

    </div>
  );
}

export default Header;
