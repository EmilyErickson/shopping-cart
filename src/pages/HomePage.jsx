import "./homePage.css"
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="background-container">
        <div className="home-page">
            <h1>Welcome to Our Shop!</h1>
            <Link className="shop-link" to="/shop">Go to Shop</Link>
            <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="clothes on rack" />
        </div>
        </div>
    )
}

export {HomePage}