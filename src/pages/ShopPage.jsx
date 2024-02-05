import {ProductCard} from "../components/ProductCard"
import PropTypes from 'prop-types';
import "./shopPage.css"

function ShopPage({productData, addToCart, cartItems, removeFromCart}) {
    return (
        <div className="shop-page">
            <h1 className="shop-header">Store</h1>
            <ul className="product-container">
            {productData.map((item) => (
                <ProductCard key={item.id} item={item} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>
            ))}
            </ul>
        </div>
    )
}

ShopPage.propTypes = {
    productData: PropTypes.array,
    addToCart: PropTypes.func,
    cartItems: PropTypes.array,
    removeFromCart: PropTypes.func,
  }

export {ShopPage}
