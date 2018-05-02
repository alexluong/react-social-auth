import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout';

class RouteWithLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Route {...this.props.rest} component={this.props.component} />
      </Layout>
    );
  }
}

export default RouteWithLayout;