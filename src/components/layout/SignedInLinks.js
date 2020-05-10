import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">LF</NavLink></li>
            </ul>
        </nav>
    )
}

export default SignedInLinks;