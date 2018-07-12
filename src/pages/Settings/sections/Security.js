import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Form from 'components/Form';
import { Alarm } from 'elements';
import Section, { SectionHeading } from '../components/Section';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const SecuritySection = ({ onSubmit, errorMessage, ...props }) => (
  <Section {...props}>
    <SectionHeading>Security</SectionHeading>
    <Alarm message={errorMessage} />
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmedPassword: '',
      }}
      onSubmit={onSubmit}
    >
      {props => (
        <Form
          {...props}
          inputs={securityInputs}
          buttonLabel="Change password"
          buttonProps={{ color: 'secondary' }}
        />
      )}
    </Formik>
  </Section>
);
SecuritySection.propTypes = propTypes;
export default SecuritySection;

const securityInputs = [
  {
    type: 'password',
    name: 'currentPassword',
    label: 'Current Password',
  },
  {
    type: 'password',
    name: 'newPassword',
    label: 'New Password',
  },
  {
    type: 'password',
    name: 'confirmedPassword',
    label: 'Confirm Password',
  },
];
