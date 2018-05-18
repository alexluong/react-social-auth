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
    const { errorMessage } = this.props;
    return (
      <div>
        { errorMessage && <p>{errorMessage}</p> }
        <SignInForm onSubmit={this.onSubmit} />
        <LinkButton href={config.google.start}>Sign In with Google</LinkButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default connect(mapStateToProps, { signIn })(SignInPage);