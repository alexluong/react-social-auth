import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import auth from 'config/auth';
import { signIn } from 'modules/auth';
import AuthLayout from 'layouts/Auth';
import SignInForm from './Form';
import { LinkButton } from 'elements';

class SignInPage extends React.Component {
  onSubmit = values => {
    this.props.signIn(values);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <AuthLayout>
        {errorMessage && <p>{errorMessage}</p>}
        <SignInForm onSubmit={this.onSubmit} />
        <LinkButton inline={false} href={auth.google.start}>
          Sign In with Google
        </LinkButton>
        <LinkButton inline={false} href={auth.facebook.start}>
          Sign In with Facebook
        </LinkButton>
        <LinkButton inline={false} tag={Link} to="sign-up">
          Don't have an account? Sign up.
        </LinkButton>
      </AuthLayout>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default connect(
  mapStateToProps,
  { signIn },
)(SignInPage);
