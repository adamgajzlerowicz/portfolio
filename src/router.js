import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Terms from './components/terms';
import Home from './components/home';

export default () =>
  <HashRouter basename="/">
    <Switch>
      <Route path="/terms">
        <Terms />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  </HashRouter>;
