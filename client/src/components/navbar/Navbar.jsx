import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/navbar-logo.svg';
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <div className="navbar__header">Mo Cloud</div>
                {!isAuth && <div className="navbar__login"><NavLink to='/login'>Sign In</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to='/registration'>Registration</NavLink></div>}
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())} >Exit</div>}
            </div>
        </div>
    );
};

export default Navbar;
