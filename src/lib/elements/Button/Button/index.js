import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { transformTag } from '../../../helpers';
import { Color } from '../../../utilities';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  color: PropTypes.string,
  outline: PropTypes.bool,
  inline: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  color: 'text',
  outline: false,
  inline: false,
};

const Button = props => <StyledButton {...props} />;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export { Button };

const outline = css`
  color: ${props => new Color(props.color).get()};
  border-color: ${props => new Color(props.color).get()};
  background-color: transparent;
`;

const notOutline = css`
  color: ${new Color('white').get()};
  border-color: ${props => new Color(props.color).get()};
  background-color: ${props => new Color(props.color).get()};
`;

const buttonCss = css`
  ${props => (props.outline ? outline : notOutline)};
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
