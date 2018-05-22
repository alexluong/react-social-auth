import React from 'react';

import { TextInput } from 'components/Inputs'

const renderInputField = field => {
  const { input, type, placeholder, label, onFocus, required } = field;
  return (
    <TextInput 
      {...input}
      type={type}
      placeholder={placeholder}
      label={label}
      onFocus={onFocus}
      required={required}
    />
  );
};

export default renderInputField;