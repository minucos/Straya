import React from "react";
import RouteMap from "./route_map";
import { Link } from 'react-router-dom';

const RouteIndexItem = (props) => (
    <div className="route-item" id={props.route.id}>
        <RouteMap className="route-index-map" routeId={props.route.id} locations={props.locations}/>
        <Link to={`athlete/route/${props.route.id}`} className="route-title">
            {props.route.title}
        </Link>
        <p className="route-description">
            {props.route.description}
        </p>
        <ul>
        </ul>
        <div className="route-stats">
            <ul>
                <li id={`${props.route.id}-distance`}>X.XXkm</li>
                <li>Distance</li>
            </ul>
            <ul>
                <li id={`${props.route.id}-elevation`}>XXm</li>
                <li>Elevation</li>
            </ul>
            <div id={`${props.route.id}-time`}>Est. Moving Time XX:XX</div>
        </div>
        <div className="route-footer">Created at time goes here</div>
    </div>
)

export default RouteIndexItem;