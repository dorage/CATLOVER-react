import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Gallery from '../Routes/Gallery';
import Detail from '../Routes/Detail';
import Tag from '../Routes/Tag';
import Girl from '../Routes/Girl';

export default () => (
    <Router forceRefresh={false}>
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/post/:id" exact component={Detail} />
            <Route path="/cat/:id" exact component={Girl} />
            <Route path="/tag/:id" exact component={Tag} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);
