import React from 'react';

import SignUpForm     from './SignUpForm';
import { LinkButton } from 'components/Buttons';

class SignUpPage extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <React.Fragment>
        <SignUpForm onSubmit={this.onSubmit} />
        <LinkButton isRRLink to="/sign-in">Have an account already? Sign in.</LinkButton>
      </React.Fragment>
    );
  }
}

export default SignUpPage;