import React  from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
`;

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: .5rem;
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
	  border-image: linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(123,255,0,1) 100%);
    border-image-slice: 1;
  }
`;

const TextInput = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{ label }</Label>
    <Input {...rest} />
  </Wrapper>
);

export { TextInput };
