import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../utils/route_util';

const NavBar = (props) => {
    if (props.currentUser === undefined) {
        return (
            <div id="global-nav">
                <nav className="nav-bar">
                    <div className="left-navbar">
                        <h1>
                            <Link id="global-nav-logo" to="/">STRAYA</Link>
                        </h1>
                    </div>
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
                                <Link to="/athlete/workouts">
                                    <button className="nav-dropdown-item training-nav">
                                        My Workouts
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="nav-dropdown profile-nav">
                        <button className="nav-dropdown-btn profile-nav">
                            <img 
                                id="nav-image"
                                src={window.images.demo_profile_pic} 
                                alt="Profile Pic"
                            />
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
                </nav>
            </div>
        )
    }
}

export default NavBar;