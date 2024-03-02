import Header from './components/Header';
import Inicio from './components/Inicio';
import Titulo from './components/Titulo';

function App() {
  return (
    <div>
        <Header />
        <Inicio />
        <Titulo texto="¿Quiénes somos?" />
    </div>
  );
}

export default App;
