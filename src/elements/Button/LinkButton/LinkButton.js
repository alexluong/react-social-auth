import React from 'react';
import styled from 'styled-components';
import Color from 'utilities/Color';
import ButtonBase from '../Base';

const defaultProps = {
  tag: 'a',
  color: 'text',
};

const LinkButton = props => <StyledLinkButton {...props} />;
LinkButton.defaultProps = defaultProps;
export default LinkButton;

const StyledLinkButton = styled(ButtonBase)`
  color: ${({ color }) => Color.get(color)};
  padding: 0;
  border: none;
`;
