import Header from './components/Header';
import Inicio from './pages/Inicio';
import Titulo from './components/Titulo';
import SobreNosotros from './pages/SobreNosotros';
import { Login } from './components/Login';
import Catalogo from './pages/Catalogo';
import productos from './data/productos';
import {extraerFotos} from './functions/extraerFotos';

function App() {
 
  console.log(extraerFotos(productos)[0]);

  //Funcion para hacerle require a cada foto de extraer fotos
  const fotos = extraerFotos(productos).map(foto => {
    return require(`${foto}`);
  });


  return (
    <div>
        <Header />
        <Inicio />
        <Titulo texto="¿Quiénes somos?" />
        <SobreNosotros />
        <Titulo texto="Catálogo" />
          <Catalogo productos={productos.productos} fotos= {fotos} />
        <Login />
    </div>
  );
}

export default App;
