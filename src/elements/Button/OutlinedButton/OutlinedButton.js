import React from 'react';
import styled from 'styled-components';
import Color from 'utilities/Color';
import ButtonBase from '../Base';

const defaultProps = {
  tag: 'button',
};

const OutlinedButton = props => <StyledOutlinedButton {...props} />;
OutlinedButton.defaultProps = defaultProps;
export default OutlinedButton;

const StyledOutlinedButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${({ color }) => Color.get(color)};
  border: 1px solid ${({ color }) => Color.get(color)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ color }) => Color.get(color)};
    color: ${({ color }) => Color.getText(color)};
  }
`;
