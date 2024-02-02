import PropTypes from 'prop-types';
import { formatCurrency } from '../utilities/formatCurrency';
import { Link } from 'react-router-dom';

function Checkout({cartItems}) {
  let total = cartItems.reduce((total, items) => total + items.price * items.quantity, 0)
    function handlePlaceOrder() {
    alert("This is a demo site. You can't actually buy anything.");
  }
  console.log(cartItems)


  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <>
        <p>Your cart is empty.</p>
        <Link to="/shop">Click here to go to the Shop.</Link>
        </>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.title} - Quantity: {cartItem.quantity}
              </li>
            ))}
          </ul>
          <p>Total Price: {formatCurrency(total)}</p>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.array,
}


export default Checkout;
