const productosData = require('../data/productData');

class Producto {
    constructor() {
        this.productos = productosData;
      }
}

module.exports = Producto;