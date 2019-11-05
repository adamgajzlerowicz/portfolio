import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Terms from './components/terms';
import Home from './components/home';

const customHistory = createBrowserHistory();

export default () =>
  <Router history={customHistory}>
    <Switch>
      <Route path="/terms">
        <Terms />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
