import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    if (props.currentUser === undefined) {
        return (
            <div>
                <Link to="/login">Sign In</Link> OR
                <Link to="/signup"> Sign Up</Link>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Welcome, {props.currentUser.fname}</h3>
                <button onClick={props.logout}>Log out</button>
            </div>
        )
    }
}

export default NavBar;