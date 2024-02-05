import PropTypes from 'prop-types';
import { formatCurrency } from '../utilities/formatCurrency';
import { Link } from 'react-router-dom';
import "./checkout.css"

function Checkout({cartItems, setCartItems}) {
  let total = cartItems.reduce((total, items) => total + items.price * items.quantity, 0)
    function handlePlaceOrder() {
      setCartItems([])
    alert("This is a demo site. You can't actually buy anything.");
  }

  return (
    <div className='checkout-page'>
      <h2 className='checkout-header'>Checkout</h2>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
        <p>Your cart is empty.</p>
        <Link className='shop-link' to="/shop">Click here to go to the Shop.</Link>
        </ div>
      ) : (
        <div className='checkout-order'>
          <h3 className='checkout-header'>Order Summary</h3>
          <ul className='checkout-items'>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.title} - Quantity: {cartItem.quantity}
              </li>
            ))}
          </ul>
          <div className='checkout-total'>
            <p>Total Price: {formatCurrency(total)}</p>
            <button className='place-order-button' onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
}


export default Checkout;
