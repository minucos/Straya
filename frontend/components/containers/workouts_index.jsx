import React from "react";
import { Link } from 'react-router-dom';
import WorkoutIndexItem from "./workout_index_item.jsx";

class WorkoutIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchWorkouts();
    };

    render() {
        let workouts = this.props.workouts.map( workout => {
            return (
                <WorkoutIndexItem
                    key={workout.id}
                    workout={workout}
                />
            )
        })

        return (
            <div className="workout-index-page">
                <div className="workout-index-container"> 
                    <h1 className="workout-heading">My Activities</h1>
                    <form className="workout-searchbox" onSubmit={this.runSearch}>
                        <label>Keywords
                            <input type="text"/>
                        </label>
                        <input type="submit" value="Search"/>
                        <label>Keywords
                            <input type="text"/>
                        </label>
                    </form>
                    <h2 className="activity-count">{`${this.props.workouts.length} Activities`}</h2>
                    <table className="workout-table">
                        <thead>
                            <tr className="table-title-row">
                                <th className="workout-type">Sport</th>
                                <th className="workout-date">Date</th>
                                <th className="workout-title">Title</th>
                                <th className="workout-duration">Time</th>
                                <th className="workout-distance">Distance</th>
                                <th className="workout-action"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {workouts}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
};

export default WorkoutIndex;