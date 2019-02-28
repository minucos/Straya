import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import SplashContainer from "./containers/splash_container";
import SessionFormContainer from "./containers/session_form_container";
import SignupFormContainer from "./containers/signup_form_container";
import DashboardContainer from "./containers/dashboard_container";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
    <div>
        <NavBarContainer />

        <ProtectedRoute path="/athlete" component={DashboardContainer}/>
        <AuthRoute exact path="/" component={SplashContainer}/>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;