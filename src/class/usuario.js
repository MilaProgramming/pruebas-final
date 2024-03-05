const usuariosData = require('../data/usuariosData');
class ValidacionUsuario {
    constructor() {
      this.usuario = "";
      this.valido = false;
      this.contrasena = "";
      this.usuarios = usuariosData;
    }
  
    setValido(valido) {
      this.valido = valido;
    }
  
    getValido() {
      return this.valido;
    }
  
    setUsuario(usuario) { 
      this.usuario = usuario;
    }
  
    setContrasena(contrasena) {
      this.contrasena = contrasena;
    }
  
    validacionUsuario() {
        const foundUser = this.usuarios.find(user => user.usuario === this.usuario);
        if (!foundUser) {
          this.setValido(false);
          return;
        }
        else {
          const validarcontrasena = this.usuarios.find(user => user.usuario === this.usuario && user.contrasena === this.contrasena);
          if(!validarcontrasena){
            this.setValido(false);
            return;
          }
          this.setValido(true);
          this.contrasena = foundUser.contrasena;
          return;
        }
    }

    asignarRol(){
      const usuarioEncontrado = this.usuarios.find(user => user.usuario === this.usuario && user.contrasena === this.contrasena);
      if (usuarioEncontrado) return usuarioEncontrado.rol;

      return null;
    }

  }
  
  module.exports = ValidacionUsuario;
  