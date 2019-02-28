import React from "react";
import { Link } from 'react-router-dom';
import { publicDecrypt } from "crypto";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.athlete;

    };

    render() {
        return (
            <div id="profile">
                <div id="profile-header">
                    <img id="profile-pic" src={window.images.demo_profile_pic} alt="Profile Pic"/>
                    <h2 id="profile-heading" >{this.state.fname} {this.state.lname}</h2>
                    <ul id="profile-container">
                        <li id="first-li">
                            <div className="profile-subheading">Following</div>
                            <div id="following-total">18</div>
                        </li>
                        <li>
                            <div className="profile-subheading">Followers</div>
                            <div id="followers-total">19</div>
                        </li>
                        <li>
                            <div className="profile-subheading">Activities</div>
                            <div id="activities-total">67</div>
                        </li>
                    </ul>
                </div>
                <div id="profile-footer">
                    <div id="latest-activity">
                        Latest Activity
                    </div>
                    <p id="latest-activity-info">
                        This is where the last activity info will appear
                    </p>
                </div>
            </div>
        )
    }
};

export default Dashboard;