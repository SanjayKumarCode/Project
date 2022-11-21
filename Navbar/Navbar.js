import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
    <h3 className="logo">EXCUSE APP</h3>
    <ul className="nav-Links">

    <Link to="/" className="home">
    <li>Home</li>
    </Link>
    
    <Link to="/product" className="product">
    <li>Product</li>
    </Link>
        
    <Link to="/productdetail" className="product-details">
    <li>Product Details</li>
    </Link>
        
    <Link to="/signup" className="signup">
    <li>Sign Up</li>
    </Link>

    </ul>
    </nav>
  )
}

export default Navbar
