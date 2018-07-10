import React from 'react';
import PropTypes from 'prop-types';
// Buttons
import IconButton from './IconButton';
import LinkButton from './LinkButton';
import NormalButton from './NormalButton';
import OutlinedButton from './OutlinedButton';

const propTypes = {
  variant: PropTypes.oneOf(['normal', 'outlined', 'link', 'icon']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'black',
    'white',
    'text',
    'default',
  ]),
};
const defaultProps = {
  variant: 'normal',
  color: 'default',
};

const Button = ({ variant, ...props }) => {
  switch (variant) {
    case 'outlined':
      return <OutlinedButton {...props} />;
    case 'link':
      return <LinkButton {...props} />;
    case 'icon':
      return <IconButton {...props} />;
    case 'normal':
    default:
      return <NormalButton {...props} />;
  }
};
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
