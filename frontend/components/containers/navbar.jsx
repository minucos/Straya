import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../utils/route_util';

const NavBar = (props) => {

    let linkButton = (
        <Link
            id="login-btn"
            to="/login"
        >Log In</Link>
    );

    if (props.history.location.pathname === "/login") {
        linkButton = (
            <Link
                id="login-btn"
                to="/signup"
            >Sign Up</Link>
        );
    }

    if (props.currentUser === undefined) {
        return (
            <div id="global-nav">
                <nav className="nav-bar">
                    <div className="left-navbar">
                        <h1>
                            <Link id="global-nav-logo" to="/">STRAYA</Link>
                        </h1>
                    </div>
                    {linkButton}
                </nav>
                
            </div>
        )
    } else {
        return (
            <div>
                <nav className="nav-bar">
                    <div className="left-navbar">
                        <h1>
                            <Link id="global-nav-logo" to="/">STRAYA</Link>
                        </h1>

                        <div className="nav-dropdown training-nav">
                            <button className="nav-dropdown-btn training-nav">
                                Training
                            </button>
                            <div className="nav-dropdown-content training-nav">
                                <Link to="/athlete/routes">
                                    <button className="nav-dropdown-item training-nav">
                                        My Routes
                                    </button>
                                </Link>
                                <Link to="/athlete/training">
                                    <button className="nav-dropdown-item training-nav">
                                        My Workouts
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-navbar">
                        <div className="nav-dropdown profile-nav">
                            <button 
                                className="nav-dropdown-btn profile-nav"
                                id="profile-nav">
                                <img 
                                    id="nav-image"
                                    src={window.images.demo_profile_pic} 
                                    alt="Profile Pic"
                                />⌄
                            </button>
                            <div className="nav-dropdown-content profile-nav">
                                <Link to="/athlete/profile">
                                    <button className="nav-dropdown-item profile-nav">
                                        Profile
                                    </button>
                                </Link>
                                <button 
                                    className="nav-dropdown-item profile-nav"
                                    onClick={props.logout}>
                                    Logout
                                </button>
                            </div>
                        </div>

                        <div className="nav-dropdown plus-nav">
                            <button 
                                className="nav-dropdown-btn plus-nav"
                                id="plus-logo">
                                +
                            </button>
                            <div className="nav-dropdown-content plus-nav">
                                <Link to="/routes/new">
                                    <button className="nav-dropdown-item plus-nav">
                                        Create a route
                                    </button>
                                </Link>
                                <Link to="/athlete/upload">
                                    <button className="nav-dropdown-item plus-nav">
                                        Add a workout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;