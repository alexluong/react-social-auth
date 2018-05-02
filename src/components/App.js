import React                    from 'react';
import { Router }               from 'react-router'; // To use history
import { Route, Switch, Redirect }        from 'react-router-dom';

import RouteWithLayout from './RouteWithLayout';
import AuthSuccessPage from './auth/AuthSuccessPage';
import LoginPage       from './auth/LoginPage';
import Stuff           from './Stuff';
import NotFound        from './NotFound';

import checkAuth   from '../hoc/checkAuth';
import history     from '../config/history';

const App = (props) => (
  <Router history={history}>
    <Switch>
      <Route           path="/auth/success" component={AuthSuccessPage} />
      <Route           path="/login"        component={LoginPage} />
      <RouteWithLayout path="/dashboard"    component={Stuff} />
      
      <Redirect exact  from="/" to="/dashboard" />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;