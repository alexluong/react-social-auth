import React from 'react';

import { config } from '../../config';
import SignInForm from './SignInForm';

class SignInPage extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <SignInForm onSubmit={this.onSubmit} />
        <a href={config.google.start}>Sign In with Google</a>
      </div>
    );
  }
}

export default SignInPage;