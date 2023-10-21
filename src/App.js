import './App.css';
import FooterSection from './Components/FooterSection';
import HeaderSection from './Components/HeaderSection';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
    <>
      <HeaderSection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/product' element={<ViewProduct/>}></Route>
      </Routes>
      <FooterSection />
    </>
  );
}


export default App;
