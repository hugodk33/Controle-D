import React from 'react';
import { Route, Router, Switch } from 'react-router';

import { Favorites } from '../pages/favorites-page';
import history from '../util/history-util';
import Home from '../pages/home-page';


export const Routes = () => (
  <Router history={history}>
  
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  
  </Router>
);
