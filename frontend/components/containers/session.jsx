import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { email: "", password: "", fname: "", lname: "" };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.loginDemo = this.loginDemo.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            })
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state)
    };

    loginDemo() {
        this.props.processDemo({ email: "test", password: "password" });
    };

    render() {

        let heading = "Join Straya today, it's Free.";
        let message = "Already a user?"
        let sessionText = "or sign up with your email";
        let linkText = "Log in!";
        let linkUrl = "/login";
        let buttonText = "Sign Up";

        if (this.props.formType === "login") {
            heading = "Log In";
            sessionText = "or log in with your email"
            message = "Not a user?"
            linkText = "Sign up!";
            linkUrl = "/signup";
            buttonText = "Log In";
        }

        return (
            <div id="session">
                <div id="session-container">
                    <h2 id="session-form-title">{heading}</h2>

                    <button id="demo-login" onClick={this.loginDemo}>
                        Log in with Demo User
                    </button>
                    <p id="session-text">{sessionText}</p>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.email}
                            placeholder="Your Email"
                            onChange={this.update("email")}
                        />
                        <input 
                            type="password" 
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update("password")}
                        />
                        <input id="submit-btn" type="submit" value={buttonText}/>
                    </form>
                    <p id="session-message">{message}<Link id="session-link" to={linkUrl}>{linkText}</Link></p>
                        <ul id="session-errors">{this.props.errors}</ul>
                </div>
            </div>
        )
    }
};

export default SessionForm;