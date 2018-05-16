import React  from 'react';
import styled from 'styled-components';

import { Center } from 'components/Containers';

const Container = styled(Center)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

class AuthLayout extends React.Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

export default AuthLayout;