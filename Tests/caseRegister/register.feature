Feature: Cedula valida
    Scenario: validacion de cedula
        Given un string que contiene la cedula de un cliente
        When verifico la cedula creando el objeto verificador
        Then la cedula es valida
