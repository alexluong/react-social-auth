import React from 'react';
import styled from 'styled-components';

const AuthLayout = ({ children }) => (
  <Page>
    <Container>{children}</Container>
  </Page>
);

export default AuthLayout;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 50rem;
  width: 100%;
`;
