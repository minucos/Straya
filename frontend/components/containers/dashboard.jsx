import React from "react";
import { Link } from 'react-router-dom';
import AcitvityFeedItem from "./activity_feed_item";

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts();
        this.props.fetchRoutes();
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

    buildFeed() {
        let feed = Object.values(this.props.workouts).concat(Object.values(this.props.routes));

        return feed.sort((a, b) => {
            let date1 = a.created_at;
            let date2 = b.created_at;

            if (date1 > date2) {
                return -1;
            }
            if (date1 < date2) {
                return 1;
            }
            return 0;
        })
    }

    render() {

        if (Object.values(this.props.workouts).length < 1 || 
            Object.values(this.props.routes).length < 1 || 
            Object.values(this.props.locations).length < 1) {
            return null;
        }

        let activityFeed = this.buildFeed().map( activity => {
            return (
                <AcitvityFeedItem
                    key={`${activity.title}-${activity.id}`}
                    activity={activity}
                    locations={this.props.locations}
                    athlete={this.props.athlete}
                />
            )
        })

        let lastActivity = "No recent activities";
        let workouts = Object.values(this.props.workouts);
        let last = workouts.length - 1;


        if (workouts.length > 0) {
            let title = workouts[last].title;
            let type = workouts[last].workout_type;
            let symbol = "👟";
            let date = this.formatDate(new Date(workouts[last].created_at));
            
            if (type === 'ride') {
                symbol = "🚲";
            }
            lastActivity = `${title} ${symbol} ∙ ${date}`;
        }

        return (
            <div className="dashboard">
                <div className="left-bar">
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
                <ul className="activity-feed">
                    {activityFeed}
                </ul>
            </div>
        )
    }
};

export default Dashboard;