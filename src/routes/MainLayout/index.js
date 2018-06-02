import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';

const Container = styled.div`
  width: 80vw;
  margin: 5rem auto;
`;

class MainLayout extends Layout {
  render() {
    return <Container>{super.render()}</Container>;
  }
}

export default MainLayout;
