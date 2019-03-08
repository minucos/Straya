import React from "react";
import { Link } from 'react-router-dom';
import RouteMap from "./route_map";

class RouteShow extends React.Component {

    componentDidMount() {
        this.props.fetchRoute(this.props.routeId);
    };
    
    render() {
        if (this.props.route === undefined) {
            return null;
        }

        return (
        <div className="route-show">
        <div className="route-index-link">
            <Link id="link-to-index" to="/athlete/routes">
                My Running Routes 
            </Link>
            / {this.props.route.title}
        </div>
            <h1 className="route-show-heading">{this.props.route.title}</h1>

            <RouteMap
                className="route-show-map"
                route={this.props.route}
                locations={this.props.locations}
                mapType="show" />
        </div>
        )
    };
}

export default RouteShow;