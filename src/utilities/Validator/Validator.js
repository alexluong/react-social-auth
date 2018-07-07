class Validator {
  // TODO: Implement
  static isHexColor(color) {
    return true;
  }

  // TODO: Implement
  static isRGBAColor(color) {
    return true;
  }

  // TODO: Implement
  static isHSVColor(color) {
    return true;
  }

  static isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  /**
   * ? I'm confused about the scope of this function
   * ? @this is Formik instead of Validator Class
   */
  static validateForm(values) {
    const errors = {};

    Object.entries(values).forEach(([type, value]) => {
      const errorMessage = Validator._checkError(type, value);
      if (errorMessage !== '') {
        errors[type] = errorMessage;
      }
    });

    return errors;
  }

  static _checkError(type, value) {
    switch (type) {
      case 'email':
        return this._validateEmail(value);
      case 'password':
        return this._validatePassword(value);
      default:
        // console.error(`ERROR: "${type}" cannot be validated.`);
        return '';
    }
  }

  static _validateEmail(email) {
    let errorMessage = '';

    if (!email) {
      errorMessage = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errorMessage = 'Invalid email address';
    }

    return errorMessage;
  }

  static _validatePassword(password) {
    let errorMessage = '';

    if (!password) {
      errorMessage = 'Required';
    } else if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters';
    }

    return errorMessage;
  }
}

export default Validator;
