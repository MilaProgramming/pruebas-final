import Inicio from "../pages/Inicio.js";
import Titulo from "./Titulo.js";
import SobreNosotros from "../pages/SobreNosotros.js";
import Catalogo from "../pages/Catalogo";

export const Main = () => {
  return (
    <div>
      <Inicio id="inicio"/>
      <Titulo texto="¿Quiénes somos?" id="sobre-nosotros"/>
      <SobreNosotros />
      <Titulo texto="Catálogo"/>
      <Catalogo name="catalogo"/>
    </div>
  );
};
