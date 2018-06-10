import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { position } from 'config/theme';

class Sidebar extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Logo>LOGO</Logo>
        <LinkContainer>
          <NavLink to="/home">Hello</NavLink>
          <NavLink to="/facebook">Facebook</NavLink>
        </LinkContainer>
      </Container>
    );
  }
}

export { Sidebar };

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  height: 10rem;
  background-color: green;
  ${position('centerChildren')};
`;

const LinkContainer = styled.div`
  a {
    display: block;
    height: 7rem;
    line-height: 7rem;
    padding-left: 3rem;
    &.active {
      border-left: 10px solid #aaaaaa;
      background-color: #dfdfdf;
    }
  }
`;
