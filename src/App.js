import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemList/ItemListContainer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi tienda"}/>}/>
        <Route path='/category/:categoryName' element={<  ItemListContainer />}/>
        <Route path='/item/:id' element={<  ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      {/* <ItemListContainer greeting = {"Bienvenidos a mi Tienda"} /> */}

    </BrowserRouter>

    
    
    
    


    
    
  );
}

export default App;
