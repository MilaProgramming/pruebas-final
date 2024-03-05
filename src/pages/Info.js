import Titulo from "../components/Titulo";
import SobreNosotros from "../pages/SobreNosotros.js";

export const Info = () => {
    return (
      <div>
        <Titulo texto="¿Quiénes somos?" id="sobre-nosotros"/>
        <SobreNosotros />
      </div>
    );
};