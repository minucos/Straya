 import React from "react";
import { Link } from 'react-router-dom';


class RoutesForm extends React.Component {
    constructor(props) {
        super(props);

        this.center = { lat: 37.7749, lng: -122.4194 };

        this.length = this.props.route.locations.length;
        this.start = this.props.route.locations[0];
        this.end = this.props.route.locations[this.length - 1];
        this.waypoints = this.props.route.locations.slice(1, this.length - 1).map(waypoint => {
            return { location: waypoint, stopover: true };
        });

        this.state = {
            locations: this.props.route.locations,
            title: this.props.route.title,
            description: this.props.route.description,
            creatorId: this.props.route.creatorId,
            mapOptions: {
                center: this.center,
                zoom: 13,
                maxZoom: 15,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
            },
            renderOptions: {
                suppressMarkers: true,
            },
        };

        this.submitMap = this.submitMap.bind(this);
    };
    
    componentDidMount() {
        this.map = new google.maps.Map(document.getElementById("new-map"), this.state.mapOptions);
        
        google.maps.event.addListener(this.map, "click", (event) => {
            this.state.locations.push({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            });
            let length = this.state.locations.length;
            let start = this.state.locations[0];
            let end = this.state.locations[length - 1];
            let waypoints = this.state.locations.slice(1, length - 1).map(waypoint => {
                return { location: waypoint, stopover: true };
            });



            this.setState({
                routeOptions: {
                    origin: start,
                    destination: end,
                    waypoints: waypoints,
                    optimizeWaypoints: true,
                    travelMode: "WALKING",
                },
            })
        });
    };

    componentDidUpdate() {
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();

        directionsService.route(this.state.routeOptions, function (result, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
            }
        });

        directionsDisplay.setMap(this.map);
    };

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        };
    };

    submitMap(e) {
        e.preventDefault();

        let newRoute = {
            title: this.state.title,
            description: this.state.description,
            creator_id: this.state.creatorId,
        }
        

        this.props.action(newRoute, this.state.locations )
            .then(() => this.props.history.push(`/athlete/routes`))
    };

    render() {
        const { titleError, descError } = this.props.errors;

        return (
            <div className="route-builder">
                <div id="global-nav">
                    <div className="nav-bar route">
                        <div className="left-navbar route">
                            <h1>
                                <Link id="global-nav-logo" to="/">STRAYA</Link>
                            </h1>
                            <h2 className="route-form-heading">
                                ROUTE BUILDER
                            </h2>
                        </div>
                        <Link id="route-exit" to="/athlete/routes">Exit Builder</Link>
                    </div>
                </div>
                
                <form id="route-form" onSubmit={this.submitMap}>
                    <div id="route-inputs">
                        <input 
                            className={ titleError ? "route-input-error" : "route-input" }
                            id="route-title"
                            type="text"
                            value={this.state.title} 
                            placeholder={titleError ? descError : "Enter a description"}
                            onChange={this.update("title")}
                        />
                        <input 
                            className={descError ? "route-input-error" : "route-input"}
                            id="route-description"
                            type="text" 
                            value={this.state.description} 
                            placeholder={descError ? descError : "Enter a description"}
                            onChange={this.update("description")}
                        />
                    </div>
                        <input 
                            id="submit-route-btn" 
                            type="submit" 
                            value="Save"
                        />
                </form>
                <div id="new-map">MAP GOES HERE</div>
            </div>
        )
    };

};

export default RoutesForm;
