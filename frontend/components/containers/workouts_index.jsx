import React from "react";
import { Link } from 'react-router-dom';
import WorkoutIndexItem from "./workout_index_item.jsx";

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.workouts;

        this.searchInput = "";
        this.searchCategory = "all workouts";

        this.runSearch = this.runSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkouts();
    };

    update(field) {
        return (e) => {
            this.searchInput = e.target.value;
        }
    }

    runSearch() {
        this.props.fetchWorkouts()
        .then((workouts) => {
            
        })
    }

    render() {
        let workouts = this.props.workouts.reverse().map( workout => {
            return (
                <WorkoutIndexItem
                    key={workout.id}
                    workout={workout}
                    deleteWorkout={this.props.deleteWorkout}
                />
            )
        })

        return (
            <div className="workout-index-page">
                <div className="workout-index-container"> 
                    <h1 className="workout-heading">My Activities</h1>
                    <form className="workout-searchbox" onSubmit={this.runSearch}>
                        <div className="search-keywords">
                            <label>Keywords</label>
                                <input id="keyword-input" type="text"/>
                            
                        </div>
                            <input id="search-btn" type="submit" value="Search"/>
                        <div className="search-type">
                            <label id="type-label">Sport</label>
                            <select
                                id="search-type-box"
                                defaultValue="all workouts"
                            >
                                <option value="all workouts">all workouts</option>
                                <option value="run">run</option>
                                <option value="ride">ride</option>
                            </select>
                        </div>
                    </form>
                    <h2 className="activity-count">{`${this.props.workouts.length} Activities`}</h2>
                    <table className="workout-table">
                        <thead>
                            <tr className="table-title-row">
                                <th className="workout-titles fixed-width">Sport</th>
                                <th className="table-titles date" onClick={this.props.sortDate}>
                                    Date
                                </th>
                                <th className="table-titles" onClick={this.props.sortTitle}>
                                    Title
                                </th>
                                <th className="table-titles fixed-width" onClick={this.props.sortTime}>
                                    Time
                                </th>
                                <th className="table-titles fixed-width" onClick={this.props.sortDistance}>
                                    Distance
                                </th>
                                <th className="workout-titles"></th>
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