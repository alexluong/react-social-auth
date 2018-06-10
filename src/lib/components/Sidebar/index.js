import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

import { Color } from '../../utilities/Color';
import { Icon } from '../../elements/Icon';
import { position } from 'config/theme';

const Sidebar = props => (
  <Container {...props}>
    <Logo>LOGO</Logo>
    <LinkContainer>
      <NavLink to="/home">Hello</NavLink>
      <NavLink to="/facebook">
        <Route path="/facebook">
          {({ match }) => (
            <React.Fragment>
              <Icon name="close" color={match ? 'white' : 'primary'} />
              <Text>Facebook</Text>
            </React.Fragment>
          )}
        </Route>
      </NavLink>
    </LinkContainer>
  </Container>
);

export { Sidebar };

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  height: 10rem;
  background-color: royalblue;
  ${position('centerChildren')};
`;

const LinkContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 7rem;
    color: ${new Color('primary').get()};
    text-decoration: none;
    padding-left: 3rem;
    position: relative;
    &.active {
      background-color: ${new Color('secondary').get()};
      color: ${new Color('white').get()};
      &::after {
        visibility: visible;
      }
    }
    &::after {
      visibility: hidden;
      content: '';
      ${position('absolute')};
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

const Text = styled.span`
  margin-left: 1rem;
`;
