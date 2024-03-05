export function validacionClave(inputString) {

    if (inputString.length < 8) {
      return false;
    }

    const contieneMayuscula = /[A-Z]/.test(inputString);
    const contieneMinuscula = /[a-z]/.test(inputString);
  
    return contieneMayuscula && contieneMinuscula;
  }
  