import React from 'react';

import { config } from 'config';
import SignInForm from './SignInForm';

import { LinkButton } from 'components/Buttons';

class SignInPage extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <SignInForm onSubmit={this.onSubmit} />
        <LinkButton href={config.google.start}>Sign In with Google</LinkButton>
      </div>
    );
  }
}

export default SignInPage;