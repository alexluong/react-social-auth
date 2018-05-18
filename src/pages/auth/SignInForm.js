import React                from 'react';
import { connect }          from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { func }             from 'prop-types';

import { TextInput }         from 'components/Inputs';
import { clearErrorMessage } from 'modules/auth';

class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired
  };

  clearErrorMessage = () => {
    this.props.clearErrorMessage();
  }

  renderInputField = (field) => {
    const { input, type, placeholder, label } = field;
    return (
      <TextInput 
        {...input}
        type={type}
        placeholder={placeholder}
        label={label}
        onFocus={this.clearErrorMessage}
        required
      />
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} method="post" >
        <Field name="username" type="text"
          placeholder="you@example.com"  
          label="Enter email or username:"
          component={this.renderInputField}
        />

        <Field name="password" type="password"
          placeholder="password"
          label="Enter password:"
          component={this.renderInputField}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sign-in'
})(
  connect(null, { clearErrorMessage })(SignInForm)
);