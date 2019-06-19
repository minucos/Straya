import React from "react";
import { Link } from 'react-router-dom';
import RouteMap from "./route_map";

class ActivityFeedItem extends React.Component {

    formatDate(dateString) {
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let date = dateString.getDate();
        let month = months[dateString.getMonth()];
        let year = dateString.getFullYear();

        return `${date} ${month}, ${year}`;
    }

    formatTime(duration) {
        let hrs = Math.floor(duration / 3600);
        duration = duration % 3600;
        let mins = Math.floor(duration / 60);
        duration = duration % 60;
        let secs = duration;

        if (mins < 10) {
            mins = `0${mins}`;
        };
        if (secs < 10) {
            secs = `0${secs}`;
        };
        
        if (hrs === 0) {
            return `${mins}:${secs}`; 
        }

        return `${hrs}:${mins}:${secs}`;
    }

    avgSpeed(duration, distance) {
        let avgSecondsPerKm = Math.floor(duration / distance);
        let avgMins = Math.floor(avgSecondsPerKm / 60);
        let avgSecs = avgSecondsPerKm % 60;

        if (avgSecs < 10) {
            avgSecs = `0${avgSecs}`;
        }

        return `${avgMins}:${avgSecs}/km`;
    }

    render() {
        let profilePhoto = (
            <img
                id="feed-profile-pic"
                src={window.images.demo_profile_pic}
                alt="Profile Pic"
            />
        )

        if (this.props.athlete.photoUrl !== undefined) {
            profilePhoto = (
                <img
                    className="feed-profile-pic"
                    src={this.props.athlete.photoUrl}
                    alt="Profile Pic"
                />
            )
        }

        if (this.props.activity.workout_type === undefined) {

            let locations = Object.values(this.props.locations).filter(location => {
                return location.route_id == this.props.activity.id;
            });

            return (
                null
                // <RouteMap
                //     route={this.props.activity}
                //     locations={locations}
                //     mapType="feed"
                //     athlete={this.props.athlete}
                // />
            );
        }

        return (
            <div className="feed-workout">
                <div className="feed-workout-profile-line">
                    {profilePhoto}
                    <div className="feed-header-info">
                        <div className="feed-date">
                            Created on {this.formatDate(new Date(this.props.activity.created_at))}
                        </div>
                        <Link to={`/workouts/${this.props.activity.id}`} className="feed-title">
                            {this.props.activity.title}
                        </Link>
                        <div className="feed-workout-desc">
                            {this.props.activity.body}
                        </div>
                    </div>
                </div>
                <div className="feed-item-info">
                    <div className="feed-workout-info-dist">
                        <div className="feed-label">Distance</div>
                        <div className="feed-stat">
                            {(this.props.activity.distance).toFixed(2)}km
                                </div>
                    </div>
                    <div className="feed-workout-info-time">
                        <div className="feed-label">Time</div>
                        <div className="feed-stat">
                            {this.formatTime(this.props.activity.duration)}
                        </div>
                    </div>
                    <div className="feed-workout-info-pace">
                        <div className="feed-label">Average Pace</div>
                        <div className="feed-stat">
                            {this.avgSpeed(this.props.activity.duration, this.props.activity.distance)}
                        </div>
                    </div>

                    
                </div>
                <img className="feed-workout-photo" src={this.props.activity.photoUrl} />
            </div>
        );
    }
    
};

export default ActivityFeedItem;