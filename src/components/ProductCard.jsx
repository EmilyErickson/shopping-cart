import "../App.css"
import { useState } from 'react';
import PropTypes from 'prop-types';


function ProductCard({ item, addToCart}) {
  const [quantity, setQuantity] = useState(0);

  let product = item

  function handleIncrement(e, product) {
    setQuantity((prevQuantity) => {
    addToCart(product, prevQuantity + 1)
    return prevQuantity + 1;
    })
  }
  
  function handleDecrement() {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        addToCart(product, prevQuantity - 1)
        return prevQuantity - 1;
        })    }
  }

  function handleChange(e, product) {
    e.preventDefault()
    if(e.target.value > quantity) {
      handleIncrement(e, product)
    }
    if(e.target.value < quantity) {
      handleDecrement()
    }
  }
  
  function handleRemove() {
    setQuantity(0)
  }

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.title} />
      <div className="quantity-controls">
        {quantity === 0 ? (
          <button onClick={(e) => (handleIncrement(e, product))}>Add To Cart</button>
        ) : (<div>
          <button onClick={(e) => (handleIncrement(e, product))}>+</button>
          <div><input type="number" value={quantity} onChange={(e) => handleChange(e, product)}/>in Cart</div>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleRemove}>Remove</button>
          </div>) }
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  cartItems: PropTypes.array,
}

export {ProductCard};
