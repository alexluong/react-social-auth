import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from './Button';
import { Icon } from '../Icon';

class IconButton extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    outline: true,
    inline: true,
  };

  render() {
    const { name, ...props } = this.props;

    return (
      <StyledIconButton {...props}>
        <Icon name="close" />
      </StyledIconButton>
    );
  }
}

export { IconButton };

const StyledIconButton = styled(Button)`
  padding: 0.5rem;
  border: none;
`;
