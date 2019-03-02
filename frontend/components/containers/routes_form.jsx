import React from "react";
import { Link } from 'react-router-dom';


class RoutesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.route;

    };


    render() {
        return (
            <div className="route-form">
                <h2 className="route-form-heading">
                    ROUTE BUILDER
                </h2>
                <p>MAP INPUT </p>
            </div>
        )
    }

};

export default RoutesForm;
