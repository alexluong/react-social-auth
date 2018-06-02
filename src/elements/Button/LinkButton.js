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

const LinkButton = styled(({ tag, inline, ...props }) =>
  transformTag({ tag, ...props }),
)`
  color: mediumaquamarine;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export { LinkButton };
