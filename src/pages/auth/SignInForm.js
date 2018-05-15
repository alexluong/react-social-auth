import React                from 'react';
import { Field, reduxForm } from 'redux-form'
import { func }             from 'prop-types';

class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired
  };

  renderInputField = (field) => {
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text"
          placeholder="Email/Username"  
          component={this.renderInputField}
        />

        <Field name="password" type="password"
          placeholder="password..."
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