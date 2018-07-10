import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'elements/Button';

const SignUpLink = props => (
  <Button variant="link" tag={Link} to="sign-in">
    Have an account already? Sign in.
  </Button>
);

export default SignUpLink;
