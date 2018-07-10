import React from 'react';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import Toggle from 'utilities/Toggle';
import Sidebar from './components/Sidebar';

const SidebarLayout = ({ style, children }) => (
  <Toggle on>
    {({ on, toggle }) => {
      return (
        <Spring
          native
          to={{ sidebarWidth: on ? 20 : 8 }}
          children={({ sidebarWidth }) => (
            <StyledSidebarLayout
              style={{
                gridTemplateColumns: sidebarWidth.interpolate(
                  w => `${w}rem auto`,
                ),
              }}
            >
              <Sidebar
                style={{ gridArea: 'sidebar' }}
                isOpen={on}
                toggleOpen={toggle}
              />
              <Main style={style}>{children}</Main>
            </StyledSidebarLayout>
          )}
        />
      );
    }}
  </Toggle>
);

export default SidebarLayout;

const StyledSidebarLayout = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'sidebar main';
`;

const Main = styled.div`
  grid-area: main;
  background-color: #cecece;
`;
