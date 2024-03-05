Feature: Ver Productos

  Scenario: Lista de productos
    Given que el usuario ha accedido al sistema
    When el usuario presiona el botón "Productos"
    And se debe mostrar una lista de productos disponibles 
    Then el usuario puede ver información detallada sobre los productos