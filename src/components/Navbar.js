import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Brand LOGO
                </Link>

                <ul className="right">
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <i className="material-icons">shopping_cart</i>
                    </li>

                    <li>
                        <Link to="/cart">My cart</Link>
                    </li>
                    <li>
                        <i className="material-icons">card_giftcard</i>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
             

                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
