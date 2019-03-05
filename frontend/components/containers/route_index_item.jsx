import React from "react";
import RouteMap from "./route_map";
import { Link } from 'react-router-dom';

const RouteIndexItem = (props) => (
    <div className="route-item" id={props.route.id}>
        <RouteMap className="route-index-map" route={props.route} locations={props.locations}/>
    </div>
)

export default RouteIndexItem;