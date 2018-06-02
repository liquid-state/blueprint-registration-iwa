import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from '@liquid-state/ui-kit';

import Logo from '../../components/Logo';
import { CONTACT } from '../../const';
import PinnedToBottom from '../../components/Layout/PinnedToBottom';
import Title from '../../components/Title';
import Form from './Form';

const VerificationEmail = props => (
  <React.Fragment>
    <Logo />

    <Title>Email Verification</Title>

    <p className="text-center">
      Please check your email for a verification code.
      If you have not received a code after a few minutes,
      please contact us at
      <a href={`tel:${CONTACT.phone}`}> {CONTACT.phone}</a>
    </p>

    <Form error={props.error} onSubmit={props.onSubmit} />

    <PinnedToBottom>
      <Pager
        steps={3}
        current={2}
        hideLeftArrow
        hideRightArrow
      />
    </PinnedToBottom>
  </React.Fragment>
);

VerificationEmail.propTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

VerificationEmail.defaultProps = {
  error: '',
};

export default VerificationEmail;
