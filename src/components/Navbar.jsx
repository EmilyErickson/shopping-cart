import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({cartItems}) {
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  function ItemNumber() {
    if (cartItems.length === 0) {
      return (
        <div></div>
      )
    } else {
    return (
      <span className="cart-count">{totalItems}</span>
    )}
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">-Home- </Link>
        <Link to="/shop">-Shop-</Link>
        <Link to="/cart">
          Cart <ItemNumber />
        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    cartItems: PropTypes.array
}

export {Navbar}
