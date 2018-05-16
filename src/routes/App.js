import React                       from 'react';
import { Router }                  from 'react-router'; // To use history
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthSuccessPage  from 'pages/auth/AuthSuccessPage';
import SignInPage       from 'pages/auth/SignInPage';
import SignOutPage      from 'pages/auth/SignOutPage';
import Stuff            from 'pages/Stuff';
import NotFoundPage     from 'pages/NotFoundPage';

import MainLayout       from 'routes/MainLayout';
import AuthLayout       from 'routes/AuthLayout';

import checkAuth       from 'hoc/checkAuth';
import routeWithLayout from 'hoc/routeWithLayout'
import { history }     from 'config';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/sign-out"    component={SignOutPage} />
          <Route path="/sign-in"     component={checkAuth(routeWithLayout(SignInPage, AuthLayout), true)} />
          <Route path="/dashboard"   component={checkAuth(routeWithLayout(Stuff, MainLayout))} />

          <Route path="/auth/success" component={AuthSuccessPage} /> { /* OAuth success */ }
          <Redirect exact  from="/" to="/dashboard" />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;