import React from "react";
import { Link } from 'react-router-dom';
import { publicDecrypt } from "crypto";

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts();
    };

    formatDate(dateString) {
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let date = dateString.getDate();
        let month = months[dateString.getMonth() + 1];
        let year = dateString.getFullYear();

        return `${month} ${date}, ${year}`;
    }

    render() {

        if (this.props.workouts === undefined) {
            return null;
        }
        
        let lastActivity = "No recent activities";
        let workouts = Object.values(this.props.workouts);
        let last = workouts.length - 1;


        if (workouts.length > 0) {
            let title = this.props.workouts[last].title;
            let type = this.props.workouts[last].workout_type;
            let symbol = "👟";
            let date = this.formatDate(new Date(this.props.workouts[last].created_at));
            
            if (type === 'ride') {
                symbol = "🚲";
            }
            lastActivity = `${title} ${symbol} ∙ ${date}`;
        }

        return (
            <div className="dashboard">
                <div id="profile">
                    <div id="profile-header">
                        <img id="profile-pic" src={window.images.demo_profile_pic} alt="Profile Pic"/>
                        <h2 id="profile-heading" >{this.props.athlete.fname} {this.props.athlete.lname}</h2>
                        <ul id="profile-container">
                            <li id="first-li">
                                <div className="profile-subheading">Following</div>
                                <div id="following-total">-</div>
                            </li>
                            <li>
                                <div className="profile-subheading">Followers</div>
                                <div id="followers-total">-</div>
                            </li>
                            <li>
                                <div className="profile-subheading">Activities</div>
                                <div id="activities-total">{Object.values(this.props.workouts).length}</div>
                            </li>
                        </ul>
                    </div>
                    <div id="profile-footer">
                        <div id="latest-activity">
                            Latest Activity
                        </div>
                        <p id="latest-activity-info">
                            {lastActivity}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard;