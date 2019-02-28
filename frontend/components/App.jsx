import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import Splash from "./splash";
import SessionFormContainer from "./containers/session_form_container";
import SignupFormContainer from "./containers/signup_form_container";
import ProfileContainer from "./containers/profile_container";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
    <div>
        <NavBarContainer />

        <ProtectedRoute path="/athlete/profile" component={ProfileContainer}/>
        <AuthRoute exact path="/" component={Splash}/>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;