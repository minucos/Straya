import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../utils/route_util';

const NavBar = (props) => {
    if (props.currentUser === undefined) {
        return (
            <div id="global-nav">
                <nav className="nav-bar">
                    <h1>
                        <Link id="global-nav-logo" to="/">STRAYA</Link>
                    </h1>
                    <Link 
                        className="btn" 
                        id="login-btn" 
                        to="/login"
                    >Log In</Link>
                </nav>
                
            </div>
        )
    } else {
        return (
            <div>
                <nav className="nav-bar">
                    <h1>
                        <Link id="global-nav-logo" to="/">STRAYA</Link>
                    </h1>
                    <div className="nav-dropdown">
                        <button className="nav-dropdown-btn">P</button>
                        <div className="nav-dropdown-content">
                            <Link 
                                className="nav-dropdown-item"
                                to="/athlete/profile">
                                Profile
                            </Link>
                            <button 
                                className="nav-dropdown-item"
                                onClick={props.logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;