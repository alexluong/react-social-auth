import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

// UIs
import AuthLayout from 'layouts/Auth';
import Form from '../components/Form';
import SignInLinks from './Links';

// Misc
import { loadingSelector, errorMessageSelector } from 'modules/selectors';
import { signIn, SIGN_IN } from 'modules/user';
import Validator from 'utilities/Validator';

class SignInPage extends React.Component {
  submit = (values, actions) => {
    this.props.signIn({ values, actions });
  };

  render() {
    const { isLoading, errorMessage } = this.props;

    return (
      <AuthLayout>
        {errorMessage && <p>{errorMessage}</p>}
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validate={Validator.validateForm}
          onSubmit={this.submit}
        >
          {props => (
            <Form
              {...props}
              isLoading={isLoading}
              inputs={signInInputs}
              links={<SignInLinks />}
            />
          )}
        </Formik>
      </AuthLayout>
    );
  }
}

export default connect(
  state => ({
    isLoading: loadingSelector([SIGN_IN])(state),
    errorMessage: errorMessageSelector([SIGN_IN])(state),
  }),
  { signIn },
)(SignInPage);

const signInInputs = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'you@example.com',
    label: 'Enter email or username:',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    label: 'Enter password:',
  },
];
