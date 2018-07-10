import React from 'react';
import styled, { css } from 'styled-components';
import transformTag from 'utilities/transformTag';

const ButtonBase = props => {
  return <StyledButtonBase {...props} />;
};
export default ButtonBase;

const buttonCss = css`
  padding: 1rem 2rem;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus,
  &:active {
    outline: none;
  }
`;

const StyledButtonBase = styled(({ tag, color, ...props }) =>
  transformTag({ tag, ...props }),
)`
  ${buttonCss};
`;
