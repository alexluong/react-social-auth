import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp } from 'modules/auth';
import AuthLayout from 'layouts/Auth';
import SignUpForm from './Form';
import { LinkButton } from 'elements';

class SignUpPage extends React.Component {
  onSubmit = values => {
    this.props.signUp(values);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <AuthLayout>
        {errorMessage && <p>{errorMessage}</p>}
        <SignUpForm onSubmit={this.onSubmit} />
        <LinkButton tag={Link} to="sign-in">
          Have an account already? Sign in.
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
  { signUp },
)(SignUpPage);
