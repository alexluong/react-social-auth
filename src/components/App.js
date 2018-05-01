import React                    from 'react';
import { Router }               from 'react-router'; // To use history
import { Route, Switch, Redirect }        from 'react-router-dom';

import AuthSuccessPage from './auth/AuthSuccessPage';
import LoginPage       from './auth/LoginPage';
import MainApp         from './MainApp';
import Stuff           from './Stuff';
import NotFound        from './NotFound';

import checkAuth   from '../hoc/checkAuth';
import history     from '../config/history';
console.log(Router.DefaultRoute);
const App = (props) => (
  <Router history={history}>
    <Switch>
      <Route path='/auth/success' component={AuthSuccessPage} />
      <Route path='/login'        component={LoginPage} />

      <MainApp>
        <Switch>
          <Route path="/dashboard" component={Stuff} />
          
        </Switch>
      </MainApp>
      
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;