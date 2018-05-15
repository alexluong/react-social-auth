import React from 'react';

import { getAccessToken, history } from '../config';

const requireAuth = (WrappedComponent, login, redirect = 'sign-in', checkWithServer) => {
  return class extends React.Component {
    state = {
      checked: false,
      through: false
    };

    componentDidMount() {
      const token = getAccessToken();
      if (!token) {
        if (login) {
          return this.setState({ checked: true, through: true });
        }
        if (redirect) {
          history.push(redirect);
        }
        return this.setState({ checked: true });
      }
      if (login) {
        history.push('/');
      }
      this.setState({ checked: true, through: true });
    }

    render() {
      const { checked, through } = this.state;
      if (!checked) {
        // TODO: Spinner
        return <p>Checking</p>;
      } else if (!through) {
        return <p>Unauthorized</p>;
      } else {
        return <WrappedComponent {...this.props} hi="there" />;
      }
    }
  };
};

export default requireAuth;