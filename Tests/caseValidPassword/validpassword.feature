Feature: verificar que la contraseña contenga al menos 8 caracteres, una mayúscula y una minúscula.

    Scenario: La funcion de validacion de clave
        Given Una string que actua de clave
        When Verifico con la función de validación
        Then La clave debe tener al menos 8 caracteres, una mayúscula y una minúscula