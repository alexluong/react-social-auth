import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { getUser }         from '../../actions';
import { saveAccessToken } from '../../config/localStorage';
import history             from '../../config/history';

class AuthSuccessPage extends Component {
  state = {
    checked: false,
    success: false
  };

  componentDidMount() {
    const hash = this.props.location.hash;
    if (hash.length === 0) {
      this.setState({ checked: true });
    }

    const accessToken = hash.slice(1);
    saveAccessToken(accessToken);
    this.props.getUser(accessToken);
    history.push('/');
  }

  render() {
    return (
      <div>Auth Success</div>
    );
  }
}

export default connect(null, { getUser })(AuthSuccessPage);