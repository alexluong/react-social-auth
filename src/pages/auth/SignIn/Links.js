import React from 'react';
import { Link } from 'react-router-dom';
import auth from 'config/auth';
import { LinkButton } from 'elements';

const SignInLinks = props => (
  <React.Fragment>
    <LinkButton inline={false} href={auth.google.start}>
      Sign In with Google
    </LinkButton>
    <LinkButton inline={false} href={auth.facebook.start}>
      Sign In with Facebook
    </LinkButton>
    <LinkButton inline={false} tag={Link} to="sign-up">
      Don't have an account? Sign up.
    </LinkButton>
  </React.Fragment>
);

export default SignInLinks;
