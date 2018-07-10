import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'utilities/Color';
import transformTag from 'utilities/transformTag';

const propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  ]),
  color: PropTypes.string,
};
const defaultProps = {
  tag: 'p',
  color: 'text',
};

const Typography = ({ tag, ...rest }) => (
  <StyledTypography {...rest} tag={tag} />
);
Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;
export default Typography;

const StyledTypography = styled(transformTag)`
  color: ${({ color }) => Color.get(color)};
`;
