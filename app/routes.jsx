import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import About from './views/About/About.jsx';
import Contact from './views/Contact/Contact.jsx';
import Home from './views/Home/Home.jsx';

export default function () {
    return (
        <Router history={browserHistory}>
            <Route path="/">
                <Route path="app" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    );
}