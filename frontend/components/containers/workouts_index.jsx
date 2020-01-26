import React from "react";
import { Link } from 'react-router-dom';
import WorkoutIndexItem from "./workout_index_item.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronCircleLeft,
    faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons';


class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            searchInput: '',
            searchCategory: 'all workouts'
        }

        this.runSearch = this.runSearch.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkouts({
            query: this.state.searchInput,
            category: this.state.searchCategory
        });
    };

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.page !== this.state.page) {
        //     this.props.fetchRoutes(this.state.page);
        // }
    }

    turnPage(n) {
        this.setState({
            page: this.state.page + n
        })
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    runSearch() {
        this.props.fetchWorkouts({
            query: this.state.searchInput,
            category: this.state.searchCategory
        })
    }

    render() {
        let page = this.state.page * 20;
        let workouts = this.props.workouts
            .slice(page, page + 20)
            .map( workout => {
                return (
                    <WorkoutIndexItem
                        key={workout.id}
                        workout={workout}
                        deleteWorkout={this.props.deleteWorkout}
                    />
            )
        })

        let lastPage = this.props.workouts.length === (this.state.page + 1) * 20 || this.props.workouts.length < (this.state.page + 1) * 20;

        return (
            <div className="workout-index-page">
                <div className="workout-index-container"> 
                    <h1 className="workout-heading">My Activities</h1>
                    <form className="workout-searchbox" onSubmit={this.runSearch}>
                        <div className="search-keywords">
                            <label>Keywords</label>
                                <input 
                                    id="keyword-input" 
                                    type="text" 
                                    value={this.state.searchInput}
                                    onChange={this.update('searchInput')}
                                />
                        </div>
                            <input id="search-btn" type="submit" value="Search"/>
                        <div className="search-type">
                            <label id="type-label">Sport</label>
                            <select
                                id="search-type-box"
                                defaultValue={this.state.searchCategory}
                                onChange={this.update('searchCategory')}
                            >
                                <option value="all workouts">all workouts</option>
                                <option value="run">run</option>
                                <option value="ride">ride</option>
                            </select>
                        </div>
                    </form>
                    <h2 className="activity-count">{`${page+1}-${page+20 > this.props.workouts.length ? this.props.workouts.length: page+20} of ${this.props.workouts.length} Activities`}</h2>
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
                    <div className="page-buttons">
                        <button
                            className={this.state.page === 0 ? 'page-turn disabled' : 'page-turn'}
                            onClick={this.state.page === 0 ? null : () => this.turnPage(-1)}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            <span>prev</span>
                        </button>
                        <button
                            className={lastPage ? 'page-turn disabled' : 'page-turn'}
                            onClick={lastPage ? null : () => this.turnPage(1)}
                        >
                            <span>next</span>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </button>
                    </div>
                </div>
            </div>
        )
    };
};

export default WorkoutIndex;