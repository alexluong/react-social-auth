import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

// UIs
import AuthLayout from 'layouts/Auth';
import Form from '../components/Form';
import SignInLinks from './Links';

// Misc
import { signIn } from 'modules/auth';
import Validator from 'utilities/Validator';

class SignInPage extends React.Component {
  onSubmit = (values, actions) => {
    this.props.signIn(values);
  };

  render() {
    const { errorMessage } = this.props;

    return (
      <AuthLayout>
        {errorMessage && <p>{errorMessage}</p>}
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validate={Validator.validateForm}
          onSubmit={this.onSubmit}
        >
          {props => (
            <Form {...props} inputs={signInInputs} links={<SignInLinks />} />
          )}
        </Formik>
      </AuthLayout>
    );
  }
}

export default connect(
  state => ({ errorMessage: state.auth.errorMessage }),
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
