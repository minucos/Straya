import React from "react";
import { Link } from 'react-router-dom';

class WorkoutIndexItem extends React.Component {
    
    formatDate(dateString) {
        const days = ['Mon', 'Tue','Wed','Thur','Fri','Sat','Sun']
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
        this.props.deleteWorkout(this.props.workout.id);
    };

    render() {
        return (
            <tr id={`${this.props.workout.id}`} className="workout-activity-row">
                <td className="workout-col col-workoutType" data-field-name="workout_type">
                    {`${this.props.workout.workout_type}`}
                </td>
                <td className="workout-col col-date" data-field-name="date">
                    {this.formatDate(new Date(this.props.workout.created_at))}
                </td>
                <td className="workout-col col-title" data-field-name="title">
                    <Link className="workout-title-link" to={`/workouts/${this.props.workout.id}`}>
                        {`${this.props.workout.title}`}
                    </Link>
                </td>
                <td className="workout-col col-duration" data-field-name="duration">
                    {`${this.formatTime(this.props.workout.duration)}`}
                </td>
                <td className="workout-col col-distance" data-field-name="distance">
                    {`${(this.props.workout.distance).toFixed(2)} km`}    
                </td>
                <td className="workout-col col-action" data-field-name="action">
                    <Link to={`/workouts/${this.props.workout.id}/edit`}>
                        <button className="workout-table-button">
                            Edit
                        </button>
                    </Link>
                    <button className="workout-table-button" onClick={this.remove.bind(this)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    };

}

export default WorkoutIndexItem;