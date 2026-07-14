import { Link } from 'react-router-dom'
import react from 'react'

function Navbar() {
  return (
    <nav className="navbar" >
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">ShopHub</Link>
              <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/checkout" className="nav-link">Cart</Link>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-link">
                <Link to="/auth" className="btn btn-secondary">Login</Link>
                <Link to="/auth" className="btn btn-primary">SignUp</Link>
            </div>
        </div>
        </div>
      

    </nav>
  )
}

export default Navbar
