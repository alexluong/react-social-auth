import React from 'react';
import styled from 'styled-components';
import Color from 'utilities/Color';
import { Button } from 'elements';
import SidebarItem from './SidebarItem';

const sidebarRoutes = [
  {
    path: '/home',
    icon: 'home',
    label: 'Home',
  },
  {
    path: '/settings',
    icon: 'search',
    label: 'Settings',
  },
  {
    path: '/facebook',
    icon: 'close',
    label: 'Facebook',
  },
];

const Sidebar = ({ open, toggleOpen, ...props }) => (
  <Container {...props}>
    <LogoContainer>
      <div>LOGO</div>
      <SidebarControl
        variant="icon"
        name="arrow-left"
        color="white"
        onClick={toggleOpen}
      />
    </LogoContainer>

    <LinkContainer>
      {sidebarRoutes.map(route => (
        <SidebarItem key={route.path} {...route} open={open} />
      ))}
    </LinkContainer>
  </Container>
);

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  height: 8rem;
  background-color: royalblue;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarControl = styled(Button)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const LinkContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 7rem;
    color: ${Color.get('primary')};
    text-decoration: none;
    padding-left: 3rem;
    position: relative;
    &.active {
      background-color: ${Color.get('secondary')};
      color: ${Color.get('white')};
      &::after {
        visibility: visible;
      }
    }
    &::after {
      visibility: hidden;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 1rem;
      height: 100%;
      background-color: #cecece;
      transition: width 0.2s ease-in;
    }
    &:hover::after {
      visibility: visible;
      width: 100%;
    }
  }
`;
