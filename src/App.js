import Header from './components/Header';
import Inicio from './pages/Inicio';
import Titulo from './components/Titulo';
import SobreNosotros from './pages/SobreNosotros';
import CartaProducto from './components/CartaProducto';
import foto1 from './assets/products/product-image-1-thumb.jpg';
import { Login } from './components/Login';

function App() {
  return (
    <div>
        <Header />
        <Inicio />
        <Titulo texto="¿Quiénes somos?" />
        <SobreNosotros />
        <Titulo texto="Catálogo" />
        <CartaProducto nombre="Producto 1" descripcion="Descripción del producto 1" precio="100" foto={foto1} />
        <Login />
    </div>
  );
}

export default App;
