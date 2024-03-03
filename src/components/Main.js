import Inicio from "../pages/Inicio.js"
import Titulo from "./Titulo.js";
import SobreNosotros from "../pages/SobreNosotros.js"
import { Login } from "./Login";
import Catalogo from '../pages/Catalogo';

export const Main = () => {
  return (
    <div>
      <Inicio/>
        <Titulo texto="¿Quiénes somos?" />
        <SobreNosotros />
        <Titulo texto="Catálogo" />
          <Catalogo/>
        <Login />
    </div>
  );
};
