import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../Button';
import { Icon } from '../../Icon';

const propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  inline: PropTypes.bool,
  /** Icon's prop */
  color: PropTypes.string,
  /** Icon's prop */
  width: PropTypes.number,
  /** Icon's prop */
  height: PropTypes.number,
};

const defaultProps = {
  inline: true,
  color: 'text',
  tag: 'button',
};

const IconButton = ({ name, color, width, height, ...props }) => (
  <StyledIconButton {...props} outline>
    <Icon name="close" color={color} width={width} height={height} />
  </StyledIconButton>
);

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export { IconButton };

const StyledIconButton = styled(Button)`
  padding: 0.5rem;
  border: none;
`;
