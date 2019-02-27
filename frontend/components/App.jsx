import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import SessionFormContainer from "./containers/session_form_container";
import SignupFormContainer from "./containers/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../utils/route_util";

const App = () => (
    <div>
        <h1>Straya</h1>
        <NavBarContainer />

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;