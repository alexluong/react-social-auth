import React from 'react';
import styled from 'styled-components';

import { Layout } from '../Layout';
import { Sidebar } from '../../components/Sidebar';

class SidebarLayout extends Layout {
  render() {
    return (
      <StyledSidebarLayout>
        <StyledSidebar />
        <Main>{super.render()}</Main>
      </StyledSidebarLayout>
    );
  }
}

export { SidebarLayout };

const StyledSidebarLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 20rem auto;
`;

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
`;

const Main = styled.div`
  grid-area: main;
  background-color: #cecece;
`;
