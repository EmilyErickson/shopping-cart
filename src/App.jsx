import { Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {ShopPage} from './pages/ShopPage';
import { Navbar } from './components/Navbar';
import Cart from './components/Cart';

function App() {

  return (
    <div>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
