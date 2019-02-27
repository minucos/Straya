import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);

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
        .then(this.props.history.push("/"));
    };

    render() {
        if (this.props.formType === "login") {
            return (
                <div>
                    <h2>Log into your account</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email: 
                            <input 
                                type="text" 
                                value={this.state.email}
                                onChange={this.update("email")}
                            />
                        </label>
                        <br/>
                        <label>Password: 
                            <input 
                                type="password" 
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                        </label>
                        <br/>
                        <input type="submit" value="Log in"/>
                        <br/>
                        <Link to="/signup">Not a user? Sign up!</Link>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Create an account</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email:
                                <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update("email")}
                            />
                        </label>
                        <br/>
                        <label>Firstname:
                                <input
                                type="text"
                                value={this.state.fname}
                                onChange={this.update("fname")}
                            />
                        </label>
                        <br/>
                        <label>Lastname:
                                <input
                                type="text"
                                value={this.state.lname}
                                onChange={this.update("lname")}
                            />
                        </label>
                        <br/>
                        <label>Password:
                                <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                        </label>
                        <br />
                        <input type="submit" value="Create account" />
                        <br/>
                        <Link to="/login">Already a user? Log in!</Link>
                    </form>
                </div>
            )
        }
    };
};

export default SessionForm;