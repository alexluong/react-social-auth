import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

class LinkButton extends React.Component {
  static defaultProps = {
    tag: 'a',
    outline: true,
  };

  render() {
    return <StyledLinkButton {...this.props} />;
  }
}

export { LinkButton };

const StyledLinkButton = styled(Button)`
  padding: 0;
  border: none;
`;
