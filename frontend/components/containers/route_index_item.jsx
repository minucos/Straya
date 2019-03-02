import React from "react";
import RouteMap from "./route_map";
import { Link } from 'react-router-dom';

const RouteIndexItem = (props) => (
    <div className="route-item" id={props.route.id}>
        <RouteMap className="route-index-map" routeId={props.route.id}/>
        <Link to={`athlete/route/${props.route.id}`} className="route-title">
            {props.route.title}
        </Link>
        <p className="route-description">
            {props.route.description}
        </p>
        <div className="route-stats">
            <ul>
                <li>7.46km</li>
                <li>Distance</li>
            </ul>
            <ul>
                <li>41m</li>
                <li>Elevation</li>
            </ul>
            <div>Est. Moving Time 46:26</div>
        </div>
        <div className="route-footer">Created at time goes here</div>
    </div>
)

export default RouteIndexItem;