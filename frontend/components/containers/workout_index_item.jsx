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
                    {`${this.props.workout.title}`}
                </td>
                <td className="workout-col col-distance" data-field-name="distance">
                    {`${this.props.workout.distance}`}    
                </td>
                <td className="workout-col col-duration" data-field-name="duration">
                    {`${this.props.workout.duration}`}
                </td>
                <td className="workout-col col-action" data-field-name="action">
                    <button className="workout-table-button">
                        Edit
                    </button>
                    <button className="workout-table-button">
                        Delete
                    </button>
                </td>
            </tr>
        )
    };

}

export default WorkoutIndexItem;