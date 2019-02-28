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
                        <button className="nav-dropdown-btn">
                            <img 
                                id="nav-image"
                                src={window.images.demo_profile_pic} 
                                alt="Profile Pic"
                            />
                        </button>
                        <div className="nav-dropdown-content">
                            <Link to="/athlete/profile">
                                <button className="nav-dropdown-item">
                                    Profile
                                </button>
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