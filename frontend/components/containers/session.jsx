import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        this.state = { email: "", password: "", fname: "", lname: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {

        let heading = "Join Straya today, it's Free.";
        let linkMessage = "Already a user? Login!";
        let linkUrl = "/login";
        let buttonText = "Create Account";

        if (this.props.formType === "login") {
            heading = "Log In";
            linkMessage = "Not a user? Sign up!";
            linkUrl = "/signup";
            buttonText = "Log In";
        }

        return (
            <div id="session">
                <div id="session-container">
                    <h2 id="session-form-title">{heading}</h2>
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
                        <input type="submit" value={buttonText}/>
                    </form>
                        <ul id="session-errors">{this.props.errors}</ul>
                        <Link className="session-link" to={linkUrl}>{linkMessage}</Link>
                </div>
            </div>
        )
    }
};

export default SessionForm;