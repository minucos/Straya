import React from 'react';
import NavBarContainer from "./containers/navbar_container";
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div>
        <h1>Straya</h1>
        <NavBarContainer />
    </div>
);

export default App;