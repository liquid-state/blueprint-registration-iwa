import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { storiesOf, action } from '@storybook/react';
import { setRoute } from '../.storybook/config';
// Pages
import { HomePage } from '../src/pages/Home';
import Register from '../src/pages/Register';
import TermsConditions from '../src/pages/TermsConditions';
import Verification from '../src/pages/Verification';

import './style.css';

storiesOf('Pages', module)
  .add('Terms and conditions', () => <TermsConditions />);

storiesOf('Pages/Home', module)
  .add('Default', () => <HomePage onSubmit={action('submit')} />)
  .add('With Error', () => <HomePage onSubmit={action('submit')} error="This code is invalid" />);

storiesOf('Pages/Register', module)
  .add('Default', () => <Register onSubmit={action('submit')} />)
  .add('With Error', () => <Register onSubmit={action('submit')} error="This email address has already been registered!" />);

storiesOf('Pages/Verification', module)
  .add('Default', () => <Verification onSubmit={action('submit')} />)
  .add('With Error', () => <Verification onSubmit={action('submit')} error="The code you have entered is not the correct length!" />);
