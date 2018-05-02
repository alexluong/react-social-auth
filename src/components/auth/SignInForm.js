import React from 'react';
import { Field, reduxForm } from 'redux-form'

const renderInputField = (field) => {
  const { input, type, placeholder } = field;
  return (
    <div>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

let SignInForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        placeholder="Email/Username"  
        component={renderInputField}
      />

      <Field name="password" type="password"
        placeholder="password..."
        component={renderInputField}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

SignInForm = reduxForm({
  form: 'sign-in'
})(SignInForm);

export default SignInForm;