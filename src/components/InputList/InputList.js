import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'elements';

const propTypes = {
  inputs: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const InputList = ({ inputs, values, touched, errors, ...formActions }) => {
  return inputs.map(({ name, type, label, placeholder }) => (
    <React.Fragment key={name}>
      <TextInput
        name={name}
        type={type}
        label={label}
        placeholder={placeholder}
        value={values[name]}
        {...formActions}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </React.Fragment>
  ));
};
InputList.propTypes = propTypes;

export default InputList;
