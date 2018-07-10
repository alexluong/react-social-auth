import React from 'react';
import styled from 'styled-components';
import Color from 'utilities/Color';
import ButtonBase from '../Base';

const defaultProps = {
  tag: 'button',
};

const NormalButton = props => <StyledNormalButton {...props} />;
NormalButton.defaultProps = defaultProps;
export default NormalButton;

const StyledNormalButton = styled(ButtonBase)`
  color: ${({ color }) => Color.getText(color)};
  background-color: ${({ color }) => Color.get(color)};
  border: 1px solid ${({ color }) => Color.get(color)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
