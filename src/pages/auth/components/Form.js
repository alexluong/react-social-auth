import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Validator from 'utilities/Validator';
import InputList from 'components/InputList';
import { Button, Spinner } from 'elements';

const propTypes = {
  isLoading: PropTypes.bool,
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
  isLoading,
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

    <ButtonContainer>
      <Button
        type="submit"
        disabled={isSubmitting || !Validator.isEmptyObject(errors)}
      >
        Submit
      </Button>

      {isLoading && <Spinner size="s" />}
    </ButtonContainer>

    {links}
  </form>
);
Form.propTypes = propTypes;

export default Form;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
