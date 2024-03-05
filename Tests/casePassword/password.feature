Feature: Validación de contraseña

    Scenario: El Sistema valida los requisitos de la contraseña
        Given El cliente ingresa el nombre de usuario y la contraseña
        When Presiona el botón "Aceptar"
        Then El sistema valida que la contraseña cumpla los requisitos