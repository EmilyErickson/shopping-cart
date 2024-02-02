import PropTypes from 'prop-types';
import { formatCurrency } from '../utilities/formatCurrency';
import { Link } from 'react-router-dom';

function Cart({cartItems, removeFromCart}) {
  console.log("cart", cartItems)
    function calculateTotal() {
      let total = cartItems.reduce((total, items) => total + items.price * items.quantity, 0)

        return (
          formatCurrency(total)
        )
    }


  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <img src={cartItem.image} alt={cartItem.title} />
              <div>
                <h3>{cartItem.title}</h3>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Price: {formatCurrency(cartItem.price * cartItem.quantity)}</p>
                <button onClick={() => removeFromCart(cartItem)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: {calculateTotal()}</p>
            <Link to="/checkout"><button>Checkout</button></Link>
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
