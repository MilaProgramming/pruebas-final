Feature: Validación de Registro

    Scenario: El Sistema permite Registrarse
        Given El cliente accede al sistema
        When Presiona el botón registrarse
        And Ingresa el nombre de usuario y la contraseña 
        And Presiona el botón "Aceptar"
        Then El sistema permite el registro del usuario