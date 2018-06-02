import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { transformTag } from '../helpers';

const propTypes = {
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  inline: true,
  tag: 'a',
};

const StyledLinkButton = styled(({ tag, children, inline, ...props }) =>
  transformTag({ tag, children, ...props }),
)`
  color: mediumaquamarine;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  ${props => console.log(props)};
`;

const LinkButton = ({ tag, inline, ...props }) => (
  <StyledLinkButton tag={tag} inline={inline} {...props} />
);

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export { LinkButton };
