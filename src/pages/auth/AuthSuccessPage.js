import React from 'react';
import { connect } from 'react-redux';

import { getUser } from 'modules/auth';
import history from 'routes/history';
import { saveAccessToken } from 'config';

class AuthSuccessPage extends React.Component {
  state = {
    checked: false,
    success: false,
  };

  componentDidMount() {
    const hash = this.props.location.hash;
    if (hash.length === 0) {
      this.setState({ checked: true });
      return;
    }

    const accessToken = hash.slice(1);
    saveAccessToken(accessToken);
    this.props.getUser(accessToken);
    history.push('/');
  }

  render() {
    const { checked, success } = this.state;
    if (checked && !success) {
      return <p>Auth Fail</p>;
    }

    // TODO: This should be a spinner
    return <p>Auth Success</p>;
  }
}

export default connect(
  null,
  { getUser },
)(AuthSuccessPage);
