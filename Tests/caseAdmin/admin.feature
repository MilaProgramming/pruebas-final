Feature: Administración de Usuarios

  Scenario: Administrador visualiza y elimina usuarios
    Given que el administrador accede al panel de control del sistema
    When selecciona la opción "Administración de Usuarios"
    Then el sistema muestra una lista de todos los usuarios registrados
    And el administrador puede eliminar un usuario 