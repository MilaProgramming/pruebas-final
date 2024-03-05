Feature: Registro de Usuario

  Scenario: Registro de Usuario Exitoso
       Given el sistema se conecta correctamente a la base de datos
       When completa el campo de usuario 
       And completa el campo de contraseña 
       Then el usuario se registra correctamente

