import React from 'react';
import '../styles/CartaProducto.css'; // Estilos CSS para este componente

const CartaProducto = ({ nombre, descripcion, precio, foto }) => {

  return (
    <div className="carta-producto">
      <img src={foto} alt={nombre} className="foto-producto" />
      <div className="info-producto">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        <button className="agregar-carrito">
          Agregar al carrito <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default CartaProducto;
