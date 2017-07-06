import React from 'react';
import { AppBar, Drawer, List, ListItem } from 'material-ui';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import Index from './components';


const networkInterface = createNetworkInterface({
// __SIMPLE_API_ENDPOINT__ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
  uri: '__SIMPLE_API_ENDPOINT__'
});
const client = new ApolloClient({networkInterface})

export default () => (
  <ApolloProvider client={client}>
    <Router>
         <Route exact path="/" component={Index}/>
    </Router>
  </ApolloProvider>
);