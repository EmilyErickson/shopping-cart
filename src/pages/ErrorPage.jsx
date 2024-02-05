import { Link } from "react-router-dom"
import "./errorPage.css"


function ErrorPage() {
    return (
      <div className="error-page">
        <h1>{"Oh no, this route doesn't exist!"}</h1>
        <Link className="home-link" to="/">
          You can go back to the home page by clicking here, though!
        </Link>
      </div>
    )
}

export {ErrorPage}