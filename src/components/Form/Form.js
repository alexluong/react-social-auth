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
  buttonProps: PropTypes.object,
};
const defaultProps = {
  buttonLabel: 'Submit',
  buttonProps: {},
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
  buttonLabel,
  buttonProps,
}) => (
  <form onSubmit={handleSubmit}>
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
        {...buttonProps}
        type="submit"
        disabled={isSubmitting || !Validator.isEmptyObject(errors)}
      >
        {buttonLabel}
      </Button>

      {isLoading && <Spinner size="s" />}
    </ButtonContainer>

    {links}
  </form>
);
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
