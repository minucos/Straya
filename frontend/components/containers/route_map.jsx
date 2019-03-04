import React from "react";
import { Link } from 'react-router-dom';


class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.length = this.props.locations.length;
        this.start = this.props.locations[0];
        this.end = this.props.locations[this.length - 1];
        this.waypoints = this.props.locations.slice(1,this.length - 2).map( waypoint => {
            return { location: waypoint, stopover: true };
        });

        this.mapOptions = {
            center: this.end,
            zoom: 11,
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
        this.map = new google.maps.Map(document.getElementById(`map-${this.props.routeId}`), this.mapOptions);

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer(this.renderOptions);

        directionsService.route(this.routeOptions, function (result, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
            }
        });

        directionsDisplay.setMap(this.map);

        

    }


    render() {
        return (
            <div>
                <div className="map-index" id={`map-${this.props.routeId}`}>MAP GOES HERE</div>
            </div>

        )
    }
};

export default RouteMap;

// function initMap() {
//     let directionsService = new google.maps.DirectionsService();
//     let directionsDisplay = new google.maps.DirectionsRenderer();

//     let mapOptions = {
//         zoom: 7,
//         center: chicago
//     }
//     let map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     directionsDisplay.setMap(map);
// }

// function calcRoute() {
//     let start = document.getElementById('start').value;
//     let end = document.getElementById('end').value;
//     let request = {
//         origin: start,
//         destination: end,
//         travelMode: 'DRIVING'
//     };
//     directionsService.route(request, function (result, status) {
//         if (status == 'OK') {
//             directionsDisplay.setDirections(result);
//         }
//     });
// }