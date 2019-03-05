import React from "react";
import { Link } from 'react-router-dom';
import RouteIndexItem from "./route_index_item.jsx";

class RouteIndex extends React.Component {

    componentDidMount() {
        this.props.fetchRoutes();
    }

    render() {
        let routes = this.props.routes.map( route => {

            let locations = this.props.locations.filter( location => location.route_id == route.id)

            return (
                <RouteIndexItem
                    key={route.id}
                    route={route}
                    locations={locations}
                />
            )
        })

        return (
            <div className="routes-page">
                <div className="route-index">
                    <h2 className="route-heading">
                        My Routes
                    </h2>
                    <Link to="/routes/new"><button className="new-route-btn">
                        Create New Route
                    </button></Link>
                    <ul className="route-list">
                        {routes}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RouteIndex;