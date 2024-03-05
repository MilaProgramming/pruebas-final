Feature: Inicio de Sesión

    Scenario: Inicio de Sesión Exitoso
        Given el sistema verifica que haya credenciales en su array
        When ingresa el nombre de usuario y la contraseña 
        Then el cliente accede a su cuenta de manera satisfactoria