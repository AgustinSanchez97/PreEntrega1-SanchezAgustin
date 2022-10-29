import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';


function App() {


  return (
    
    <BrowserRouter basename='https://github.com/AgustinSanchez97/PreEntrega1-SanchezAgustin'>      
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi tienda"}/>}/>
          <Route path='/category/:categoryName' element={<  ItemListContainer />}/>
          <Route path='/item/:id' element={<  ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/>          
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
