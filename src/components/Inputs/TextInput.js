import React  from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 150px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px 0 20px;

  border: none;
  border-bottom: 1px solid mediumaquamarine;
  
  &::placeholder {
    opacity: 0;
	  transition: opacity .2s ease-out;
  }

  &:not(:placeholder-shown) ~ span > span {
    opacity: 0;
    bottom: 10px;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 1;
	    transition-delay: .2s;
    }

    & ~ span:after {
      height: 100%;
      opacity: 1;
    }

    & ~ span > span {
      bottom: calc(40px + .5em);
    }
  }
`;

const Box = styled.span`
  width: 100%;
  height: 40px;
  pointer-events: none;
  cursor: text;

  position: absolute;
  bottom: 0;
  left: 0;
  &:after {
    content: "";
    width: 100%;
    height: 0;
    
    position: absolute;
    bottom: 0;
    left: 0;

    opacity: 0;
    border: 1px solid mediumaquamarine;

    will-change: opacity, height;
    transition: height .2s ease-out, opacity .2s ease-out;
  }  
`;

const Label = styled.span`
  position: absolute;
  left: 20px;
  bottom: 10px;
  pointer-events: none;

  will-change: bottom, opacity;
  transition: bottom .2s cubic-bezier(0.9,-0.15, 0.1, 1.15), opacity .2s ease-out;
`;

const TextInput = ({ label, ...rest }) => (
  <Wrapper>
    <Input {...rest} />
    <Box>
      <Label>{ label }</Label>
    </Box>
  </Wrapper>
);

export { TextInput };
