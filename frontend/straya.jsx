import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: { 
                athletes: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id },
        }

        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    };

    //TESTING
    // window.store = store
    // end of TESTING

    delete window.currentUser

    ReactDOM.render(<Root store={store} />, root)
})