import React from 'react';
import CartaProducto from '../components/CartaProducto'; 
import '../styles/Catalogo.css';

const Catalogo = ({ productos, fotos }) => {

  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <CartaProducto
          key={index}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          foto={fotos[index]}
        />
      ))}
    </div>
  );
}

export default Catalogo;
