import React from 'react';
import { Link } from 'react-router-dom';
import auth from 'config/auth';
import Button from 'elements/Button';

const SignInLinks = props => (
  <React.Fragment>
    <Button variant="link" href={auth.google.start}>
      Sign In with Google
    </Button>
    <Button variant="link" href={auth.facebook.start}>
      Sign In with Facebook
    </Button>
    <Button variant="link" tag={Link} to="sign-up">
      Don't have an account? Sign up.
    </Button>
  </React.Fragment>
);

export default SignInLinks;
