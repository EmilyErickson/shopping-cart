import { FetchProducts } from "../components/Products"
import {ProductCard} from "../components/ProductCard"
import { useState } from "react"


function ShopPage() {
    let productData = FetchProducts()

    const [cartItems, setCartItems] = useState([])


    function addToCart(product, amount) {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if(existingItem) {
            if(amount === 0) {
                removeFromCart(product)
            }
            setCartItems((prevItems) =>
            prevItems.map((item) =>
            item.id === product.id ? {...item, quantity: amount} : item
            )
            );
        } else {

            setCartItems((prevItems) => 
                 [...prevItems, {...product, quantity: amount}]
                )
        }
    }

    function removeFromCart(product) {
        let newCartItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(newCartItems)
    }


    return (
        <div>
            <h1>Store</h1>
            <ul>
            {productData.map((item) => (
                <ProductCard key={item.id} item={item} addToCart={addToCart} cartItems={cartItems}/>
            ))}
            </ul>
        </div>
    )
}

export {ShopPage}
