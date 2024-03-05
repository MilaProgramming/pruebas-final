Feature: Registro de Usuario

  Scenario: Registro de Usuario Exitoso
       Given que el cliente accede al sistema
       When completa el campo de usuario con "admin" 
       And completa el campo de contraseña con "admin" 
       And presiona el botón "Registrar"
       Then el sistema responde de manera correcta 

