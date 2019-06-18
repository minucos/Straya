import React from "react";
import { Link } from 'react-router-dom';


class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            distance: 0,
            duration: 0,
        };

        this.length = this.props.locations.length;
        this.start = this.props.locations[0];
        this.end = this.props.locations[this.length - 1];
        this.waypoints = this.props.locations.slice(1,this.length - 1).map( waypoint => {
            return { location: waypoint, stopover: true };
        });

        this.mapOptions = {
            center: this.end,
            zoom: 13,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
        }

        this.routeOptions = {
            origin: this.start,
            destination: this.end,
            waypoints: this.waypoints,
            optimizeWaypoints: false,
            travelMode: "WALKING",
        }

        this.renderOptions = {
            suppressMarkers: true,
        }
    };
    
    componentDidMount() {
        this.map = new google.maps.Map(document.getElementById(`map-${this.props.route.id}`), this.mapOptions);

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer(this.renderOptions);

        directionsService.route(this.routeOptions, function (result, status) {
            console.log(status)
            if (status == 'OK') {
                directionsDisplay.setDirections(result);

                result.routes[0].legs.forEach(leg => {
                    let distance = this.state.distance;
                    let duration = this.state.duration;

                    distance += leg.distance.value;
                    duration += leg.duration.value;

                    this.setState({
                        distance: distance,
                        duration: duration,
                    })
                });
            }
        }.bind(this));

        directionsDisplay.setMap(this.map);
    }

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
    };


    render() {
        let profilePhoto = (
            <img
                id="feed-profile-pic"
                src={window.images.demo_profile_pic}
                alt="Profile Pic"
            />
        )

        if (this.props.athlete.photoUrl !== undefined) {
            if (this.props.mapType === "feed") {
                profilePhoto = (
                    <img
                        className="feed-profile-pic"
                        src={this.props.athlete.photoUrl}
                        alt="Profile Pic"
                    />
                )
            } else {
                profilePhoto = (
                    <img
                        id="profile-pic-heading"
                        src={this.props.athlete.photoUrl}
                        alt="Profile Pic"
                    />
                )
            }
        }

        if (this.props.mapType === "feed") {
            return (
                <div className="feed-route">
                    <div className="feed-profile-line">
                        {profilePhoto}
                        <div className="feed-header-info">
                            <Link to={`/routes/${this.props.route.id}`} className="feed-title">
                                {this.props.route.title}
                            </Link>
                            <div className="feed-date">
                                Created on {this.formatDate(new Date(this.props.route.created_at))}
                            </div>
                        </div>
                    </div>
                    <div className="feed-item-info">
                        <div className="feed-route-info-dist">
                            <div className="feed-label">Distance</div>
                            <div className="feed-stat">
                                {((this.state.distance / 1000.00).toFixed(2))}km
                            </div>
                        </div>
                        <div className="feed-route-info-time">
                            <div className="feed-label">Est. Moving Time</div>
                            <div className="feed-stat">
                                {this.formatTime(this.state.duration)}
                            </div>
                        </div>
                    </div>
                    <div className="feed-map" id={`map-${this.props.route.id}`}>
                        MAP GOES HERE
                    </div>
                </div>
            );
        }
        return (
            <div className={this.props.className}>
                <div className={`map-${this.props.mapType}`} id={`map-${this.props.route.id}`}>
                    MAP GOES HERE
                </div>
                <div className="route-stats">
                    <Link to={`/routes/${this.props.route.id}`} className="route-title">
                        {this.props.route.title}
                    </Link>
                    <div className="profile-heading">
                        {profilePhoto}
                        <div className="profile-name-heading">By {this.props.athlete.fname}</div>
                    </div> 
                    <p className="route-description">
                        {this.props.route.description}
                    </p>
                    <ul className="route-distance">
                        <li 
                            className="route-distance-length"
                            id={`${this.props.route.id}-distance`}>{((this.state.distance/1000.00).toFixed(2))}km</li>
                        <li>Distance</li>
                    </ul>
                    <ul className="route-time" id={`${this.props.route.id}-duration`}>
                        <li>
                            Est. Moving Time
                        </li>
                        <li id="route-est-moving-time">
                            {this.formatTime(this.state.duration)}
                        </li>
                    </ul>
                    <div className="route-footer">Created on {this.formatDate(new Date(this.props.route.created_at))}
                    </div>
                </div>
            </div>
        )
    }
};

export default RouteMap;