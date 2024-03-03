import Inicio from "./Inicio.js"
import Titulo from "./Titulo.js";
import SobreNosotros from "./SobreNosotros.js";
import { Login } from "./Login";

export const Main = () => {
  return (
    <div>
      <Inicio />
      <Titulo texto="¿Quiénes somos?" />
      <SobreNosotros />
      <Login />
    </div>
  );
};
