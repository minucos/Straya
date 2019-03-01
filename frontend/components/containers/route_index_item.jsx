import React from "react";
import { Link } from 'react-router-dom';

const RouteIndexItem = (props) => (
    <div className="route-item" id={props.route.id}>
        <img src={window.images.demo_map} alt="Map Goes Here"/>
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