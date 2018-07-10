import React from 'react';
import styled from 'styled-components';

import { position } from 'config/theme';
import avatarPlaceholder from 'assets/avatar-placeholder.png';

const defaultProps = {
  src: avatarPlaceholder,
};

const AvatarPlaceholder = ({ src, ...props }) => (
  <Container {...props}>
    <img src={src} alt="avatar placeholder" />
    <Overlay>Upload Photo</Overlay>
  </Container>
);
AvatarPlaceholder.defaultProps = defaultProps;
export default AvatarPlaceholder;

const Container = styled.div`
  position: relative;

  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    div {
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const Overlay = styled.div`
  ${position('absolute')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  transform: translateY(100%);
  transition: all 0.2s ease-in-out;

  ${position('centerChildren')};
  padding: 1rem;
  color: white;
  text-align: center;
`;
