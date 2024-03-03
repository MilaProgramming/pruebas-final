function extraerFotos(jsonData) {
    // Verificar si el jsonData contiene la clave "productos"
    if (!jsonData || !jsonData.productos) {
      return []; // Devolver un array vacío si no hay productos
    }
  
    // Obtener la lista de productos del jsonData
    const productos = jsonData.productos;
  
    // Crear un array para almacenar las fotos
    const fotos = [];
  
    // Iterar sobre cada producto y extraer la foto
    productos.forEach(producto => {
      // Verificar si el producto tiene la propiedad "foto" y no es null ni undefined
      if (producto && producto.foto) {
        fotos.push(producto.foto); // Agregar la foto al array de fotos
      }
    });
    
    return fotos; // Devolver el array de fotos
}

export { extraerFotos }; // Exportar la función extraerFotos
  