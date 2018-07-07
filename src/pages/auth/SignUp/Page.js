import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

// UIs
import AuthLayout from 'layouts/Auth';
import Form from '../components/Form';
import SignUpLink from './Link';

// Misc
import { signUp } from 'modules/user';
import Validator from 'utilities/Validator';

class SignUpPage extends React.Component {
  onSubmit = values => {
    this.props.signUp(values);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <AuthLayout>
        {errorMessage && <p>{errorMessage}</p>}
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validate={values => Validator.validateForm(values)}
          onSubmit={this.onSubmit}
        >
          {props => (
            <Form {...props} inputs={signUpInputs} links={<SignUpLink />} />
          )}
        </Formik>
      </AuthLayout>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.ui.errorMessage };
};

export default connect(
  mapStateToProps,
  { signUp },
)(SignUpPage);

const signUpInputs = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'your_username',
    label: 'Enter username:',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'you@example.com',
    label: 'Enter email:',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    label: 'Enter password:',
  },
];
