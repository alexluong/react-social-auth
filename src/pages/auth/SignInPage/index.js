import React from 'react';
import { connect } from 'react-redux';

import { config } from 'config';
import { signIn } from 'modules/auth';
import SignInForm from './SignInForm';

import { LinkButton } from 'elements/Buttons';

class SignInPage extends React.Component {
  onSubmit = values => {
    this.props.signIn(values);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <React.Fragment>
        {errorMessage && <p>{errorMessage}</p>}
        <SignInForm onSubmit={this.onSubmit} />
        <LinkButton inline={false} href={config.google.start}>
          Sign In with Google
        </LinkButton>
        <LinkButton inline={false} href={config.facebook.start}>
          Sign In with Facebook
        </LinkButton>
        <LinkButton inline={false} isRRLink to="/sign-up">
          Don't have an account? Sign up.
        </LinkButton>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default connect(mapStateToProps, { signIn })(SignInPage);
