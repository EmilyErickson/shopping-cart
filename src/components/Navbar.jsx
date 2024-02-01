import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// { cartItems }

function Navbar() {
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    let totalItems = 3

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">-Home- </Link>
        <Link to="/shop">-Shop-</Link>
        <Link to="/cart">
          Cart <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    cartItems: PropTypes.array
}

export {Navbar}
