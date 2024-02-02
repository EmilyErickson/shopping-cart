import "../App.css"
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from "../utilities/formatCurrency";

function ProductCard({ item, addToCart, cartItems, removeFromCart}) {

  const [quantity, setQuantity] = useState(0);
  let product = item

  function ItemInCart() {
    if(cartItems.find((cartItem) => cartItem.id === product.id)) {
      const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
      return (
    <div>
      <button onClick={(e) => (handleIncrement(e, product))}>+</button>
      <div><input type="text" defaultValue={existingItem.quantity} onChange={(e) => handleChange(e, product)}/>in Cart</div>
      <button onClick={(e) => (handleDecrement(e, product))}>-</button>
      <button onClick={() => (handleRemove())}>Remove</button>
    </div>) }
    else {
      return (
        <button onClick={(e) => (handleIncrement(e, product))}>Add To Cart</button>
      )
    }

  }

  function handleIncrement(e, product) {
    e.preventDefault()
    setQuantity((prevQuantity) => {
    addToCart(product, prevQuantity + 1)
    return prevQuantity + 1;
    })
  }
  
  function handleDecrement(e, product) {
    e.preventDefault()
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        addToCart(product, prevQuantity - 1)
        return prevQuantity - 1;
        })    
      } else if(quantity === 0) {
        handleRemove()
      }
  }

  function handleChange(e, product) {
    e.preventDefault()
    if(e.target.value > quantity) {
      let newQuantity = parseInt(e.target.value)
      setQuantity(() => {
        addToCart(product, newQuantity)
        return newQuantity;
        })
        }
    if(e.target.value < quantity) {
      handleDecrement(e, product)
    }
  }
  
  function handleRemove() {
    removeFromCart(product)
    setQuantity(0)
    console.log(product)
  }

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Price: {formatCurrency(product.price)}</p>
      <img src={product.image} alt={product.title} />
      <div className="quantity-controls">
        <ItemInCart />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  removeFromCart: PropTypes.func,
}

export {ProductCard};
