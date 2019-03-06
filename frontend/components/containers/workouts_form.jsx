import React from "react";
import { Link } from 'react-router-dom';

class WorkoutsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.workout;
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        };
    };

    updateDuration(input) {
        return (e) => {
            let newDuration;

            switch (input) {
                case "hours":
                    newDuration = this.state.duration + (e.target.value * 3600);

                    break;
                case "minutes":
                    newDuration = this.state.duration + (e.target.value * 60);

                    break;
                default:
                    newDuration = this.state.duration + e.target.value
                    break;
            };
        
            this.setState({
                duration: newDuration
            })
        };
    };

    render() {
        return (
            <div className="create-workout-page">
                <div className="create-workout-container">
                    <h1 className="create-workout-header">Enter Workout Details</h1>
                    <form 
                        className="create-workout-form"
                        onSubmit={this.saveWorkout}>
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
                                        className="time-input"
                                        type="number" 
                                        value={Math.floor(this.state.duration/3600)} 
                                        onChange={this.updateDuration("hours")}    
                                    />
                                    <input 
                                        className="time-input"
                                        type="number"
                                        value={Math.floor(this.state.duration / 60)}
                                        onChange={this.updateDuration("minutes")}   
                                    />
                                    <input 
                                        className="time-input"
                                        type="number"
                                        value={this.state.duration % 60}
                                        onChange={this.updateDuration("seconds")}    
                                    />
                                </div>
                            </div>
                        </div>
                        <label id="type-label">Sport</label>
                            <input 
                                className="workout-type"
                                type="dropdown"
                                value={this.state.title}
                                onChange={this.update("title")}
                            />
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
                                value={this.state.description}
                                onChange={this.update("description")}
                            >
                            </textarea>
                        <input 
                            id="create-workout-btn"
                            type="submit" 
                            value="Create"/>
                    </form>
                </div>
            </div>
        );
    };
};

export default WorkoutsForm;