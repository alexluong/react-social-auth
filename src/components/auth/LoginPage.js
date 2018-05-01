import React, { Component } from 'react';
import config from '../../config';

class LoginPage extends Component {

  render() {
    return (
      <div>
        <a href={`${config.google.start}`}>Sign In with Google</a>
      </div>
    );
  }
}

export default LoginPage;