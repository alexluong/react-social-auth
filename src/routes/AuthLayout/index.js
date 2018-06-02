import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';

import { Center } from 'elements/Container';

const Page = styled(Center)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 50rem;
  width: 100%;
`;

class AuthLayout extends Layout {
  render() {
    return (
      <Page>
        <Container>{super.render()}</Container>
      </Page>
    );
  }
}

export default AuthLayout;
