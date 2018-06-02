import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from '../../routing';
import Container from '../../components/Layout/Container';

import Home from '../Home';
import Register from '../Register';
import TermsConditions from '../TermsConditions';
import Verification from '../Verification';

export default () => (
  <Container fixed>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/terms-and-conditions" component={TermsConditions} />
      <Route path="/verification-email" component={Verification} />
    </Switch>
  </Container>
);
