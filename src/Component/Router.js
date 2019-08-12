import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Gallery from '../Routes/Gallery';
import Detail from '../Routes/Detail';
import Girl from '../Routes/Girl';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/post/:id" exact component={Detail} />
            <Route path="/girl/:id" exact component={Girl} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);
