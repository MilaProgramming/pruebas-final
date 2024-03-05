Feature: Cerrar Sesion

  Scenario: validacion de Cerrar Sesión
    Given que el usuario está accediendo al sistema
    When el usuario presiona el botón "Cerrar Sesión"
    And el sistema cierra la sesión del usuario
    Then el sistema debe presentar una confirmación para cerrar la sesión