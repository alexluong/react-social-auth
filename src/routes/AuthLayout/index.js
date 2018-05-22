import React  from 'react';
import styled from 'styled-components';

import { Center } from 'components/Containers';

const Page = styled(Center)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 50rem;
  width: 100%;
`;

class AuthLayout extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          {this.props.children}
        </Container>
      </Page>
    );
  }
}

export default AuthLayout;