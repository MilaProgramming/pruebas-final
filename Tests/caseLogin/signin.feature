Feature: Inicio de Sesión

    Scenario: Inicio de Sesión Exitoso
        Given que el cliente accede con sus credenciales previamente creadas al sistema
        When ingresa el nombre de usuario y la contraseña 
        And presiona el botón "Iniciar Sesión"
        Then el cliente accede a su cuenta de manera satisfactoria