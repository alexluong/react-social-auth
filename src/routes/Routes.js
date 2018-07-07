import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import AuthSuccessPage from 'pages/auth/AuthSuccess';
import SignInPage from 'pages/auth/SignIn';
import SignUpPage from 'pages/auth/SignUp';
import SignOutPage from 'pages/auth/SignOut';
import Stuff from 'pages/Stuff';
import Facebook from 'pages/Facebook';
import SettingsPage from 'pages/Settings';
import UploadPage from 'pages/Upload';
import DnDPage from 'pages/DnD';
import NotFoundPage from 'pages/NotFound';

// Misc
import history from './history';
import withAuthorization from './hoc/withAuthorization';

const Guest = withAuthorization(['guest'], '/home');
const User = withAuthorization(['user'], '/sign-in');

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* Authentication Flow */}
          <Route path="/sign-out" component={SignOutPage} />
          <Route path="/sign-in" component={Guest(SignInPage)} />
          <Route path="/sign-up" component={Guest(SignUpPage)} />

          {/* App */}
          <Route path="/home" component={User(Stuff)} />
          <Route path="/facebook" component={User(Facebook)} />
          <Route path="/settings" component={User(SettingsPage)} />
          <Route path="/dnd" component={DnDPage} />
          <Route path="/upload" component={UploadPage} />

          {/* OAuth success */}
          <Route path="/auth/success" component={AuthSuccessPage} />

          {/* Else */}
          <Redirect exact from="/" to="home" />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
