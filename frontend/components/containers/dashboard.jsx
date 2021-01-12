import React from "react";
import { Link } from 'react-router-dom';
import AcitvityFeedItem from "./activity_feed_item";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0
        };
        this.fetchMoreItems = this.fetchMoreItems.bind(this);
    }

    fetchMoreItems(e) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.setState({ page: this.state.page + 1 }, () => {
                this.props.fetchNewsfeed(this.state.page);
            })
        }
    }

    componentDidMount() {
        this.props.fetchNewsfeed(this.state.page);
        
        document.addEventListener('scroll', this.fetchMoreItems)
    };

    componentWillUnmount() {
        document.removeEventListener('scroll',this.fetchMoreItems);
    }

    formatDate(dateString) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        let date = dateString.getDate();
        let month = months[dateString.getMonth()];
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

        if (this.props.feedItems.length === 0) {
            return null;
        }

        let { photoUrl } = this.props.athlete;

        let activityFeed = this.props.feedItems.map( activity => {
            return (
                <AcitvityFeedItem
                    key={`${activity.title}-${activity.id}`}
                    activity={activity}
                    locations={this.props.locations}
                    athletes={this.props.athletes}
                />
            )
        })

        let lastActivity = "No recent activities";
        let workouts = Object.values(this.props.workouts).filter( 
            workout =>  workout.athlete_id === this.props.athlete.id
            );


        if (workouts.length > 0) {
            let title = workouts[0].title.length > 15 ? workouts[0].title.slice(0, 15) + '...' : workouts[0].title;
            let type = workouts[0].workout_type;
            let symbol = "👟";
            let date = this.formatDate(new Date(workouts[0].created_at));
            
            if (type === 'ride') {
                symbol = "🚲";
            }
            lastActivity = `${title} ∙ ${symbol} ∙ ${date}`;
        }

        return (
            <div className="dashboard">
                <div className="left-bar">
                    <div id="profile">
                        <div id="profile-header">
                            <img id="profile-pic" src={photoUrl !== "" ? photoUrl : window.images.demo_profile_pic } alt="Profile Pic"/>
                            <h2 id="profile-heading" >{this.props.athlete.fname} {this.props.athlete.lname}</h2>
                            <ul id="profile-container">
                                <li id="first-li">
                                    <div className="profile-subheading">Following</div>
                                    <div id="following-total">{this.props.athlete.followees.length}</div>
                                </li>
                                <li>
                                    <div className="profile-subheading">Followers</div>
                                    <div id="followers-total">{this.props.athlete.followers.length}</div>
                                </li>
                                <li>
                                    <div className="profile-subheading">Activities</div>
                                    <div id="activities-total">{this.props.athlete.total_workouts}</div>
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