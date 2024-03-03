import Header from './components/Header';
import Inicio from './components/Inicio';
import Titulo from './components/Titulo';
import SobreNosotros from './components/SobreNosotros';
import { Login } from './components/Login';

function App() {
  return (
    <div>
        <Header />
        <Inicio />
        <Titulo texto="¿Quiénes somos?" />
        <SobreNosotros />
        <Login />
    </div>
  );
}

export default App;
