import React from "react";
import { Link } from 'react-router-dom';


class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        }
    }
    
    componentDidMount() {
        
        this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
    }


    render() {
        return (
            <div>
                <div id="map">MAP GOES HERE</div>
            </div>

        )
    }
};

export default RouteMap;