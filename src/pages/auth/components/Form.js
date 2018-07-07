import React from 'react';
import PropTypes from 'prop-types';

import Validator from 'utilities/Validator';
import InputList from 'components/InputList';
import { Button } from 'elements';

const propTypes = {
  inputs: PropTypes.array.isRequired,
  links: PropTypes.element,
};

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  links,
  inputs,
}) => (
  <form onSubmit={handleSubmit} method="post">
    <InputList
      inputs={inputs}
      values={values}
      errors={errors}
      touched={touched}
      onChange={handleChange}
      onBlur={handleBlur}
    />

    <button
      type="submit"
      disabled={isSubmitting || !Validator.isEmptyObject(errors)}
    >
      Submit
    </button>

    {links}
  </form>
);
Form.propTypes = propTypes;

export default Form;
