import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import SplashContainer from "./containers/splash_container";
import SessionFormContainer from "./containers/session_form_container";
import SignupFormContainer from "./containers/signup_form_container";
import DashboardContainer from "./containers/dashboard_container";
import RoutesIndexContainer from "./containers/routes_index_container";
import RouteShowContainer from "./containers/route_show_container";
import NewRoutesFormContainer from "./containers/new_routes_form_container";
import WorkoutsIndexContainer from "./containers/workouts_index_container";
import WorkoutShowContainer from "./containers/workout_show_container";
import NewWorkoutsFormContainer from "./containers/new_workouts_form_container"
import WorkoutsEditFormContainer from "./containers/workouts_edit_form_container";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
    <div>
        <NavBarContainer />

        <Switch>
            <ProtectedRoute path="/athlete/dashboard" component={DashboardContainer}/>
            <ProtectedRoute path="/athlete/routes" component={RoutesIndexContainer}/>
            <ProtectedRoute path="/athlete/training" component={WorkoutsIndexContainer}/>
            <ProtectedRoute path="/workouts/:id/edit" component={WorkoutsEditFormContainer}/>
            <ProtectedRoute path="/workouts/:id" component={WorkoutShowContainer}/>
            <ProtectedRoute path="/athlete/upload" component={NewWorkoutsFormContainer}/>
            <ProtectedRoute path="/routes/new" component={NewRoutesFormContainer}/>
            <ProtectedRoute path="/routes/:id" component={RouteShowContainer}/>
            <AuthRoute exact path="/" component={SplashContainer}/>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;