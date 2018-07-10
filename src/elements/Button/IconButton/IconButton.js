import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icon';
import ButtonBase from '../Base';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

const defaultProps = {
  tag: 'button',
  color: 'text',
};

const IconButton = ({ name, color, size, ...props }) => (
  <StyledIconButton {...props}>
    <Icon name={name} color={color} size={size} />
  </StyledIconButton>
);
IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
export default IconButton;

const StyledIconButton = styled(ButtonBase)`
  padding: 0.5rem;
  border: none;
  background: transparent;
`;
