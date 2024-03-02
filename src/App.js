import Header from './components/Header';
import Inicio from './components/Inicio';
import Titulo from './components/Titulo';
import SobreNosotros from './components/SobreNosotros';

function App() {
  return (
    <div>
        <Header />
        <Inicio />
        <Titulo texto="¿Quiénes somos?" />
        <SobreNosotros />
    </div>
  );
}

export default App;
