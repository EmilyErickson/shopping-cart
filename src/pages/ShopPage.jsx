import {ProductCard} from "../components/ProductCard"
import PropTypes from 'prop-types';


function ShopPage({productData, addToCart, cartItems, removeFromCart}) {
    return (
        <div>
            <h1>Store</h1>
            <ul>
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
