import React from "react";
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class Splash extends React.Component {

    demoUser() {
        
    }

    render() {
        return (
            <div className="splash-page">
                <h1 id="splash-page-heading">The #1 app for runners and cyclists</h1>
                <div className="splash-page-content">
                    <img id="splash-image" src={window.images.splash_image} alt="Device-image"/>
                    <ul className="splash-page-btns">
                        <li id="splash-demo-login">
                            Log in with Demo User
                        </li>
                        <Link className="splash-link" to="/signup">
                            <li id="splash-signup">
                                Sign up with your Email
                            </li>
                        </Link>
                    <Link to="/login">Already a user? Log in!</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Splash;