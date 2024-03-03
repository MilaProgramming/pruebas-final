import React from 'react';
import CartaProducto from '../components/CartaProducto'; 
import '../styles/Catalogo.css';
import Producto from '../class/producto';

const Catalogo = () => {
  const productos = new Producto ().productos.productos;
  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <CartaProducto
          key={index}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          foto={producto.foto}
        />
      ))}
    </div>
  );
}

export default Catalogo;
