import React, { useState } from 'react';
import CartaProducto from '../components/CartaProducto'; 
import '../styles/Catalogo.css';
import Producto from '../class/producto';

const Catalogo = () => {
  
  const [busqueda, setBusqueda] = useState('');
  const productos = new Producto ().productos.productos; // Ajusta esto según cómo importes tu JSON de productos

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleBusquedaChange = event => {
    setBusqueda(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        className="busqueda"
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      <div className="catalogo">
      {productosFiltrados.length === 0 ? (
          <p className="no-coinicidencia">No se encuentra la coincidencia</p>
        ) : (
          productosFiltrados.map((producto, index) => (
            <CartaProducto
              key={index}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              foto={producto.foto}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Catalogo;
