import React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from 'elements';

const SignUpLink = props => (
  <LinkButton tag={Link} to="sign-in">
    Have an account already? Sign in.
  </LinkButton>
);

export default SignUpLink;
