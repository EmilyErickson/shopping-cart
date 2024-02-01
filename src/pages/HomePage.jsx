import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <h1>Welcome to Our Shop!</h1>
            <Link to="/shop">Go to Shop</Link>
        </div>
    )
}

export {HomePage}