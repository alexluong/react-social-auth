import React from 'react';
import PropTypes from 'prop-types';
// Inputs
import FileInput from './FileInput';
import TextInput from './TextInput';

const propTypes = {
  variant: PropTypes.oneOf(['text', 'file']),
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
};
const defaultProps = {
  variant: 'text',
  color: 'default',
};

const Input = ({ variant, ...props }) => {
  switch (variant) {
    case 'file':
      return <FileInput {...props} />;
    case 'text':
    default:
      return <TextInput {...props} />;
  }
};
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;
