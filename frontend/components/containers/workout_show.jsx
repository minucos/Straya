import React from "react";
import { Link } from 'react-router-dom';

class WorkoutShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchWorkout(this.props.workoutId)
    }

    formatDate(dateString) {
        const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        let day = days[dateString.getDay()];
        let date = dateString.getDate();
        let month = dateString.getMonth() + 1;
        let year = dateString.getFullYear();

        return `${day}, ${month}/${date}/${year}`;
    }

    formatTime(duration) {
        let hrs = Math.floor(duration / 3600);
        duration = duration % 3600;
        let mins = Math.floor(duration / 60);
        duration = duration % 60;
        let secs = duration;

        return `${hrs}:${mins}:${secs}`;
    }

    remove() {
        this.props.deleteWorkout(this.props.workout.id)
            .then(() => this.props.history.push("/athlete/training"));
    };

    avgSpeed(duration, distance) {
        let avgSecondsPerKm = Math.floor(duration / distance);
        let avgMins = Math.floor(avgSecondsPerKm/60);
        let avgSecs = avgSecondsPerKm % 60;

        if (avgSecs < 10) {
            avgSecs = `0${avgSecs}`;
        }

        return `${avgMins}:${avgSecs}/km`;
    }

    render() {
        const { workout, athlete } = this.props;

        if (workout === undefined || athlete === undefined) {
            return null;
        }

        const { photoUrl } = athlete;

        return (
            <div className="workout-show-page">
                <div className="workout-index-link">
                    <Link id="link-to-index" to="/athlete/training">
                        My Activities
                    </Link>
                    / {workout.title}
                </div>
                <div className="workout-show">
                    <div className="workout-actions">
                        <Link to={`/workouts/${workout.id}/edit`}>
                            <button className="workout-show-button">
                                ✎
                            </button>
                        </Link>
                        <button className="workout-show-button" onClick={this.remove.bind(this)}>
                            🗑
                            </button>
                    </div>
                    <div className="workout-details">
                        <div className="workout-details-header">
                            <h2 id="workout-heading">
                                {athlete.fname} {athlete.lname} - {workout.workout_type}
                            </h2>
                        </div>
                        <div className="workout-body">
                            <div className="workout-information">
                                <img id="workout-profile-pic" src={ photoUrl !== undefined ? photoUrl : window.images.demo_profile_pic} alt="Profile Pic" />
                                <div className="workout-info">
                                    <div id="workout-date">
                                        Completed on {this.formatDate(new Date(workout.created_at))}
                                    </div>
                                    <div id="workout-title">
                                        {workout.title}
                                    </div>
                                    <div id="workout-body">
                                        {workout.body}
                                    </div>
                                </div>
                            </div> 
                            <div className="workout-details-stats">
                                <div className="workout-stats">
                                    <div id="workout-distance">
                                        <div className="workout-stat">
                                            {(workout.distance).toFixed(2)}km
                                        </div>
                                        <div className="show-label">Distance</div>
                                    </div>
                                    <div id="workout-time">
                                        <div className="workout-stat">
                                            {Math.floor(workout.duration / 60)}:{workout.duration % 60}
                                        </div>
                                        <div className="show-label">Elapsed Time</div>
                                    </div>
                                </div>
                                <div id="workout-avg-speed">
                                    {`Avg Speed: ${this.avgSpeed(workout.duration, workout.distance)}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default WorkoutShow;