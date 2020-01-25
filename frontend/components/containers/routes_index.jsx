import React from "react";
import { Link } from 'react-router-dom';
import RouteIndexItem from "./route_index_item.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronCircleLeft, 
    faChevronCircleRight 
} from '@fortawesome/free-solid-svg-icons';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        this.props.fetchRoutes(this.state.page);
    };

    componentDidUpdate(prevProps,prevState) {
        if (prevState.page !== this.state.page) {
            this.props.fetchRoutes(this.state.page);
        }
    }

    turnPage(n) {
        this.setState({
            page: this.state.page + n
        })
    }

    render() {
        if (this.props.routes.length === 0) {
            return null;
        }

        let routes = this.props.routes.map( route => {

            let locations = this.props.locations.filter( location => location.route_id == route.id)

            return (
                <RouteIndexItem
                    key={route.id}
                    route={route}
                    locations={locations}
                    athlete={this.props.athlete}
                />
            )
        })
        let { totalRoutes } = this.props;
        let { page } = this.state;

        let lastPage = totalRoutes === (page) * 8 || routes.length < 8;

        return (
            <div className="routes-page">
                <div className="route-index">
                    <div className="route-index-header">
                        <div className="route-index-header-left">
                            <h2 className="route-heading">
                                My Routes
                            </h2>
                            <Link to="/routes/new"><button className="new-route-btn">
                                Create New Route
                            </button></Link>
                        </div>
                        <div className="route-index-header-right">
                            <img
                                id="route-builder-img"
                                src={window.images.route_builder_img}
                                alt="Route Build Pic"
                            />
                        </div>
                    </div>
                    <ul className="route-list">
                        {routes}
                    </ul>
                    <div className="page-buttons">
                        <button
                            className={page === 1 ? 'page-turn disabled' : 'page-turn'}
                            onClick={page === 1 ? null : () => this.turnPage(-1)}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft}/>
                            <span>prev</span>
                        </button>
                        <button
                            className={lastPage ? 'page-turn disabled' : 'page-turn'}
                            onClick={lastPage ? null : () => this.turnPage(1)}
                        >
                            <span>next</span>
                            <FontAwesomeIcon icon={faChevronCircleRight}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    };
};

export default RouteIndex;