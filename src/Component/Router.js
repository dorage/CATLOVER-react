import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Gallery from '../Routes/Gallery';

export default () => (
    <Router>
        <Switch>
            <Route path="/" component={Gallery} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);
