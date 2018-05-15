import React                from 'react';
import { Field, reduxForm } from 'redux-form'
import { func }             from 'prop-types';

import { TextInput } from 'components/Inputs';

class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired
  };

  renderInputField = (field) => {
    const { input, type, placeholder, label } = field;
    return (
      <div>
        <TextInput 
          type={type}
          placeholder={placeholder}
          label={label}
          {...input}
          required
        />
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text"
          placeholder="Email/Username"  
          label="Enter email or username"
          component={this.renderInputField}
        />

        <Field name="password" type="password"
          placeholder="password..."
          label="Enter password"
          component={this.renderInputField}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sign-in'
})(SignInForm);