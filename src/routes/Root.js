import 'config/theme';

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'; // To use history
import { Route, Switch, Redirect } from 'react-router-dom';

import store from 'modules/store';

// Layouts
import MainLayout from 'routes/MainLayout';
import AuthLayout from 'routes/AuthLayout';

// Pages
import AuthSuccessPage from 'pages/auth/AuthSuccessPage';
import SignInPage from 'pages/auth/SignInPage';
import SignUpPage from 'pages/auth/SignUpPage';
import SignOutPage from 'pages/auth/SignOutPage';
import Stuff from 'pages/Stuff';
import Facebook from 'pages/Facebook';
import NotFoundPage from 'pages/NotFoundPage';

// Misc
import checkAuth from 'hoc/checkAuth';
import history from './history';
import * as routes from './';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={routes.SIGN_OUT} component={SignOutPage} />
            <AuthLayout
              path={routes.SIGN_IN}
              component={checkAuth(SignInPage, true)}
            />
            <AuthLayout
              path={routes.SIGN_UP}
              component={checkAuth(SignUpPage, true)}
            />
            <MainLayout path={routes.HOME} component={checkAuth(Stuff)} />
            <MainLayout path="/facebook" component={checkAuth(Facebook)} />
            <Route path={routes.AUTH_SUCCESS} component={AuthSuccessPage} />
            {/* OAuth success */}
            <Redirect exact from="/" to={routes.HOME} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Root;
