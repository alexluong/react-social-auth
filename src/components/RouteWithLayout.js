import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout';

const RouteWithLayout = ({ component, ...rest }) => (
  <Layout>
    <Route {...rest} component={component} />
  </Layout>
);

export default RouteWithLayout;