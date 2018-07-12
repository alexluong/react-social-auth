import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Form from 'components/Form';
import { Alarm } from 'elements';
import Section, { SectionHeading } from '../components/Section';

const propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const AccountSection = ({ user, onSubmit, errorMessage, ...props }) => (
  <Section {...props}>
    <SectionHeading>Account</SectionHeading>
    <Alarm message={errorMessage} />
    <Formik
      initialValues={{
        username: user.username,
        email: user.email,
      }}
      onSubmit={onSubmit}
    >
      {props => (
        <Form
          {...props}
          inputs={accountInputs}
          buttonLabel="Save changes"
          buttonProps={{ color: 'primary' }}
        />
      )}
    </Formik>
  </Section>
);
AccountSection.propTypes = propTypes;
export default AccountSection;

const accountInputs = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'your_username',
    label: 'Username',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'you@example.com',
    label: 'Email',
  },
];
