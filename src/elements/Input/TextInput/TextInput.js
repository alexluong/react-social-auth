import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'utilities/Color';

const propTypes = {
  label: PropTypes.string,
};

const TextInput = ({ label, color, ...rest }) => (
  <Wrapper>
    {label && <Label color={color}>{label}</Label>}
    <Input color={color} {...rest} />
  </Wrapper>
);
TextInput.propTypes = propTypes;
export default TextInput;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
`;

const Label = styled.label`
  color: ${({ color }) => Color.get(color)};
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  position: relative;
  height: 40px;
  width: 100%;
  padding: 1rem;
  border: 2px solid #cecece;
  &:focus {
    outline: none;
    border-width: 2px;
    border-image: linear-gradient(
      to right top,
      rgba(210, 255, 82, 1) 0%,
      rgba(123, 255, 0, 1) 100%
    );
    border-image-slice: 1;
  }
`;
