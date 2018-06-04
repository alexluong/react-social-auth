import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { transformTag } from '../../../helpers';
import { Color } from '../../../utilities';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'default', 'none']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  outline: PropTypes.bool,
  inline: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  type: 'default',
  outline: false,
  inline: false,
};

const Button = props => <StyledButton {...props} />;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export { Button };

const type = css`
  ${({ type, outline }) => {
    const colorSet = new Color().type(type);

    if (outline) {
      return `
        color: ${colorSet.border};
        border-color: ${colorSet.border};
        background-color: transparent;
      `;
    } else {
      return `
        color: ${colorSet.text};
        border-color: ${colorSet.border};
        background-color: ${colorSet.background};
      `;
    }
  }};
`;

const buttonCss = css`
  ${props => props.type !== 'none' && type};
  ${({ color }) => color && `color: ${new Color(color).get()}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${new Color(backgroundColor).get()}`};
  display: ${props => (props.inline ? 'inline-block' : 'block')};

  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  padding: 1rem 2rem;

  &:focus,
  &:active {
    outline: none;
  }
`;

const StyledButton = styled(({ tag, inline, outline, ...props }) =>
  transformTag({ tag, ...props }),
)`
  ${buttonCss};
`;
