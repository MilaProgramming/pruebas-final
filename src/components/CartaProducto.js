import React from "react";
import "../styles/CartaProducto.css";

const CartaProducto = ({ modo, nombre, descripcion, precio, foto }) => {
  return (
    <div className="carta-producto">
      {modo === "catalogo" ? (
        <img src={foto} alt={nombre} className="foto-producto" />
      ) : null}
      <div className="info-producto">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        {modo === "catalogo" ? <p>Precio: ${precio}</p> : null}
      </div>
    </div>
  );
};

export default CartaProducto;
