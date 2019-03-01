import React from "react";
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.loginDemo = this.loginDemo.bind(this);
    }

    loginDemo() {
        this.props.login({ email: "test", password: "password" });
    };
    
    render() {
        return (
            <div className="splash-page">
                <h1 id="splash-page-heading">The #1 app for runners and cyclists</h1>
                <div className="splash-page-content">
                    <img id="splash-image" src={window.images.splash_image} alt="Device-image"/>
                    <ul className="splash-page-btns">
                        <li id="splash-demo-login" onClick={this.loginDemo}>
                            Log in with Demo User
                        </li>
                        <li id="or-line"></li>
                        <li id="or-text">or</li> 
                        <Link className="splash-link" to="/signup">
                            <li id="splash-signup">
                                Sign up with your Email
                            </li>
                        </Link>
                        <p id="user-link">Already a Member? <Link to="/login">Log in!</Link></p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Splash;