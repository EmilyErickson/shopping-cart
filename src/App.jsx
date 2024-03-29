import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import {HomePage} from './pages/HomePage';
import {ShopPage} from './pages/ShopPage';
import { Navbar } from './components/Navbar';
import Cart from './components/Cart';
import { FetchProducts } from './components/Products';
import Checkout from './components/Checkout';
import {ErrorPage} from "./pages/ErrorPage";
import { Footer } from './components/Footer';

function App() {
  let productData = FetchProducts()

  const [cartItems, setCartItems] = useState([])


  function addToCart(product, amount) {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if(existingItem) {
          if(amount === 0) {
              removeFromCart(product)
          }
          setCartItems((prevItems) =>
          prevItems.map((item) =>
          item.id === product.id ? {...item, quantity: amount} : item
          )
          );
      } else {

          setCartItems((prevItems) => 
               [...prevItems, {...product, quantity: amount}]
              )
      }
  }

  function removeFromCart(product) {
      let newCartItems = cartItems.filter(item => item.id !== product.id);
      setCartItems(newCartItems)
  }


  return (
    <div>
      <Navbar cartItems={cartItems}/>
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage productData={productData} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
