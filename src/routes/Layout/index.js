import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    const { component, ...rest } = this.props;
    return <Route {...rest} component={component} />;
  }
}

Layout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  exact: PropTypes.bool,
};

export default Layout;
