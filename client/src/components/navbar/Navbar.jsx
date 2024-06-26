import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/navbar-logo.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <div className="navbar__header">Mo Cloud</div>
                <div className="navbar__login"><NavLink to='/login'>Sign In</NavLink></div>
                <div className="navbar__registration"><NavLink to='/registration'>Registration</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;
