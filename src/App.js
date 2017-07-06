import React from 'react';
import { AppBar, Drawer, List, ListItem } from 'material-ui';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components';

export default () => (
    <Router>
         <Route exact path="/" component={Index}/>
    </Router>
);