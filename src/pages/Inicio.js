import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import '../styles/Inicio.css'; // Estilos CSS para este componente

const Inicio = () => {
  
  return (
    <div className="contenedor-principal">
      <div className="contenido">
        <h1>Bienvenido</h1>
        {/* Utilizar Link para redirigir al usuario a la ruta /sobre-nosotros */}
        <Link to="/sobre-nosotros" className="boton-conocenos">Conócenos</Link>
      </div>
    </div>
  );
}

export default Inicio;

