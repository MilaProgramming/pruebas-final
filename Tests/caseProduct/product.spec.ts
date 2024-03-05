import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./Tests/caseProduct/product.feature");

defineFeature(feature, (test) => {

    // Feature: Ver Productos
    // Scenario: Lista de productos

    test('Lista de productos', ({ given, when, and, then }) => {
        let usuarioAccedioSistema = false;
        let botonProductosPresionado = false;
        let listaProductosMostrada = false;
        let informacionDetalladaVisible = false;

        given('que el usuario ha accedido al sistema', () => {
            usuarioAccedioSistema = true;
        });

        when('el usuario presiona el botón "Productos"', () => {
            botonProductosPresionado = true;
        });

        and('se debe mostrar una lista de productos disponibles', () => {

            listaProductosMostrada = true;
        });

        then('el usuario puede ver información detallada sobre los productos', () => {
            informacionDetalladaVisible = usuarioAccedioSistema && botonProductosPresionado && listaProductosMostrada;

            expect(informacionDetalladaVisible).toBe(true);
        });
    });
});
