import React from "react";
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.athlete;

    };

    render() {
        return (
            <div id="profile">
                <h2>Athlete profile</h2>
                <ul id="profile-container">
                    <li>
                    Name: {this.state.fname} {this.state.lname}
                    </li>
                    <li>
                        Email: {this.state.email}
                    </li>
                </ul>
            </div>
        )
    }
};

export default Profile;