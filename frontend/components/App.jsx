import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import SplashContainer from "./containers/splash_container";
import SessionFormContainer from "./containers/session_form_container";
import SignupFormContainer from "./containers/signup_form_container";
import DashboardContainer from "./containers/dashboard_container";
import RoutesIndexContainer from "./containers/routes_index_container";
import NewRoutesFormContainer from "./containers/new_routes_form_container";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
    <div>
        <NavBarContainer />

        <Switch>
            <ProtectedRoute path="/athlete/routes" component={RoutesIndexContainer}/>
            <ProtectedRoute path="/athlete" component={DashboardContainer}/>
            <ProtectedRoute path="/routes/new" component={NewRoutesFormContainer}/>
            <AuthRoute exact path="/" component={SplashContainer}/>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;