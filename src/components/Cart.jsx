import PropTypes from 'prop-types';
import { formatCurrency } from '../utilities/formatCurrency';
import { Link } from 'react-router-dom';
import "./cart.css"

function Cart({cartItems, removeFromCart}) {
    function calculateTotal() {
      let total = cartItems.reduce((total, items) => total + items.price * items.quantity, 0)

        return (
          formatCurrency(total)
        )
    }

  return (
    <div className='cart-page'>
      <h2 className='cart-header'>Items in Cart</h2>
      {cartItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <img src={cartItem.image} alt={cartItem.title} />
              <div className='item-details'>
                <h3 className='item-title'>{cartItem.title}</h3>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Price: {formatCurrency(cartItem.price * cartItem.quantity)}</p>
                <button className='remove-item' onClick={() => removeFromCart(cartItem)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: {calculateTotal()}</p>
            <Link to="/checkout"><button className='checkout-button'>Checkout</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  removeFromCart: PropTypes.func,
}


export default Cart;
