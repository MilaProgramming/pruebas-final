import Titulo from "../components/Titulo.js";
import Catalogo from "../pages/Catalogo";

export const Compra = () => {
  return (
    <div>
      <Titulo texto="Catálogo" id="catalogo"/>
      <Catalogo />
    </div>
  );
};