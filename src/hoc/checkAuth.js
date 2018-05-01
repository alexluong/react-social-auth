import React, { Component } from 'react';

import { getAccessToken } from '../config/localStorage';
import history            from '../config/history';

const requireAuth = (WrappedComponent, redirect = '/login', checkWithServer = 0) => {
  return class extends Component {
    state = {
      checked: false,
      authed: false
    };

    componentDidMount() {
      const token = getAccessToken();
      if (!token) {
        if (redirect) {
          history.push(redirect);
        }
        return this.setState({ checked: true });
      }
      this.setState({ checked: true, authed: true });
    }

    render() {
      const { checked, authed } = this.state;
      if (!checked) {
        // TODO: Spinner
        return <p>Checking</p>;
      } else if (!authed) {
        return <p>Unauthorized</p>;
      } else {
        return <WrappedComponent {...this.props} hi="there" />;
      }
    }
  };
};

export default requireAuth;