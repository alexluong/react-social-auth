import React                       from 'react';
import { Router }                  from 'react-router'; // To use history
import { Route, Switch, Redirect } from 'react-router-dom';

import RouteWithLayout  from './RouteWithLayout';
import AuthSuccessPage  from './auth/AuthSuccessPage';
import SignInPage       from './auth/SignInPage';
import SignOutPage      from './auth/SignOutPage';
import Stuff            from './Stuff';
import NotFoundPage     from './NotFoundPage';

import checkAuth   from '../hoc/checkAuth';
import { history } from '../config';

const App = (props) => (
  <Router history={history}>
    <Switch>
      <Route           path="/sign-out"    component={SignOutPage} />
      <Route           path="/sign-in"     component={checkAuth(SignInPage, true)} />
      <RouteWithLayout path="/dashboard"   component={checkAuth(Stuff)} />

      <Route path="/auth/success" component={AuthSuccessPage} /> { /* OAuth success */ }
      <Redirect exact  from="/" to="/dashboard" />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;