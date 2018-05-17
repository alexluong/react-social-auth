import React       from 'react';
import { connect } from 'react-redux';

import { config } from 'config';
import { signIn } from 'modules/auth';
import SignInForm from './SignInForm';

import { LinkButton } from 'components/Buttons';

class SignInPage extends React.Component {
  onSubmit = values => {
    this.props.signIn(values);
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

export default connect(null, { signIn })(SignInPage);