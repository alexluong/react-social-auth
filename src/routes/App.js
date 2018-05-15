import React                       from 'react';
import { Router }                  from 'react-router'; // To use history
import { Route, Switch, Redirect } from 'react-router-dom';

import RouteWithLayout  from 'routes/RouteWithLayout';
import AuthSuccessPage  from 'pages/auth/AuthSuccessPage';
import SignInPage       from 'pages/auth/SignInPage';
import SignOutPage      from 'pages/auth/SignOutPage';
import Stuff            from 'pages/Stuff';
import NotFoundPage     from 'pages/NotFoundPage';

import checkAuth   from 'hoc/checkAuth';
import { history } from 'config';

class App extends React.Component {
  render() {
    return (
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
  }
}

export default App;