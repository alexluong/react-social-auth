import React, { Component } from 'react';
import config from '../../config';

class LoginPage extends Component {

  onButtonClick = e => {
    const screenWidth  = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth   = 500;
    const popupHeight  = 500;
    const popupTop     = (screenHeight - popupHeight) / 2;
    const popupLeft    = (screenWidth  - popupWidth ) / 2;

    window.open(
      'http://localhost:8000/auth/google/start',
      'google_login',
      `width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`,
      true
    );
  }

  render() {
    return (
      <div>
        <a href={`${config.google.start}`}>Sign In with Google</a>
        <br />
        <button onClick={this.onButtonClick}>Hello</button>
      </div>
    );
  }
}

export default LoginPage;