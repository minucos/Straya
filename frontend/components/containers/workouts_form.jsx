import React from "react";
import { Link } from 'react-router-dom';

class WorkoutsForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = this.props.workout;
        this.state = this.props.workout;

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.submitWorkout = this.submitWorkout.bind(this);
    }

    componentDidMount() {
        if (this.props.buttonText === "Save") {
            this.props.fetchWorkout(this.props.workoutId)
        }
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        };
    };

    updateTime(field) {
        return (e) => {
            this[field] = e.target.value;
            
            this.setState({
                duration: this.calcDuration(this.hours, this.minutes, this.seconds),
            })

        }
    };

    calcDuration(hours, minutes, seconds) {
        return (hours * 3600) + (minutes * 60) + seconds;
    };

    submitWorkout(e) {
        e.preventDefault();

        this.setState({
            duration: this.calcDuration(this.hours, this.minutes, this.seconds)
        }, () => 
            this.props.action(this.state)
            .then(() => this.props.history.push("/athlete/training"))
        );
    };

    render() {
        if (this.props.workout === undefined) {
            return null;
        }

        return (
            <div className="create-workout-page">
                <div className="create-workout-container">
                    <h1 className="create-workout-header">Enter Workout Details</h1>
                    <form 
                        className="create-workout-form"
                        onSubmit={this.submitWorkout}>
                        <div className="distance-duration">
                            <div className="distance">
                                <label className="dist-label">Distance (in km)</label>
                                <input 
                                    id="distance-input"
                                    type="number"
                                    step="0.01" 
                                    value={this.state.distance}
                                    onChange={this.update("distance")}    
                                />
                            </div>
                            <div className="duration">
                                <label className="dur-label">Duration</label>
                                <div className="dur-inputs">
                                    <input 
                                        id="time-input-hours"
                                        className="time-input"
                                        type="number" 
                                        value={Math.floor(this.state.duration / 3600)}
                                        onChange={this.updateTime("hours")}
                                    />
                                    <div className="time-label">hr</div>
                                    <input 
                                        id="time-input-minutes"
                                        className="time-input"
                                        type="number"
                                        value={Math.floor((this.state.duration % 3600) / 60)}
                                        onChange={this.updateTime("minutes")} 
                                    />
                                    <div className="time-label">min</div>
                                    <input 
                                        id="time-input-seconds"
                                        className="time-input"
                                        type="number"
                                        value={this.state.duration % 60}
                                        onChange={this.updateTime("seconds")} 
                                    />
                                    <div className="time-label">s</div>
                                </div>
                            </div>
                        </div>
                        <label id="type-label">Sport</label>
                            <select 
                                className="workout-type"
                                defaultValue="run"
                                onChange={this.update("workout_type")}>
                                <option value="run">run</option>
                                <option value="ride">ride</option>
                            </select>
                        <label id="title-label">Title</label>
                            <input 
                                className="workout-title"
                                type="text"
                                value={this.state.title}
                                onChange={this.update("title")}
                            />
                        <label id="description-label">Description</label>
                            <textarea
                                className="workout-description"
                                type="text"
                                value={this.state.body}
                                onChange={this.update("body")}
                            >
                            </textarea>
                        <div className="workout-form-buttons">
                            <input 
                                id="workout-submit-btn"
                                type="submit" 
                                value={this.props.buttonText}/>
                            <Link 
                                id="workout-cancel-btn"
                                to="/athlete/training" 
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default WorkoutsForm;