import React from "react";
import ValidacionUsuario from "../class/usuario";
import CartaProducto from "./CartaProducto";
import axios from "axios";

export const ListaClientes = () => {
  const clientes = new ValidacionUsuario().usuarios;

  const clientesFiltrados = clientes.filter(
    (cliente) => cliente.rol === "cliente"
  );

  const handleEliminarCliente = async (usuario) => {
    try {
      await axios.delete(`http://localhost:8000/usuarios/${usuario}`);
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  return (
    <div className="catalogo">
      {clientesFiltrados.map((cliente, index) => (
        <div key={index}>
          <CartaProducto
            nombre={cliente.usuario}
            descripcion={cliente.contrasena}
          />
          <button onClick={() => handleEliminarCliente(cliente.usuario)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};
