import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right">
                <li><NavLink to='/'>SignUp</NavLink></li>
                <li><NavLink to='/'>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default SignedOutLinks;