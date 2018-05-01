import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Stuff    from './Stuff';
import NotFound from '../NotFound';

const MainApp = (props) => {
  // console.log(props);
  return (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Stuff} />
        <Route                component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)};

export default MainApp;