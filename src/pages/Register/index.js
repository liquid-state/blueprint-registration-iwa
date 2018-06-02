import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from '@liquid-state/ui-kit';

import PinnedToBottom from '../../components/Layout/PinnedToBottom';
import Title from '../../components/Title';

import Form from './Form';

const RegistrationPage = ({ onSubmit, error }) => (
  <React.Fragment>
    <Title>Let&apos;s get you setup!</Title>

    <p className="text-center">
      Please register your login details. Your email will be your username for the app.
    </p>

    <Form onSubmit={onSubmit} error={error} />
    <PinnedToBottom>
      <Pager
        steps={3}
        defaultValue={1}
        hideRightArrow
        hideLeftArrow
      />
    </PinnedToBottom>
  </React.Fragment>
);

RegistrationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

RegistrationPage.defaultProps = {
  error: undefined,
};

export default RegistrationPage;
