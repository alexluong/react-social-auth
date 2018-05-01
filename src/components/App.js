import React                    from 'react';
import { Router }               from 'react-router'; // To use history
import { Route, Switch }        from 'react-router-dom';

import AuthSuccessPage from './auth/AuthSuccessPage';
import LoginPage       from './auth/LoginPage';
import MainApp         from './main/MainApp';

import requireAuth from '../hoc/requireAuth';
import history     from '../config/history';

const App = (props) => (
  <Router history={history}>
    <div>
      <Switch>
        <Route  path='/auth/success'  component={AuthSuccessPage} />
        <Route  path='/login'         component={LoginPage} />
        <Route  path='/'              component={requireAuth(MainApp)} />
      </Switch>
    </div>
  </Router>
);

export default App;