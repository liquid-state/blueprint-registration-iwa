import React from 'react';
import { configure, addDecorator, action } from '@storybook/react';
import { Router } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory';
import '../src/style/index.less';
import Container from '../src/components/Layout/Container';

function bindRouting() {
  const history = createMemoryHistory();

  // Use set inside the storybook to load the correct route for pages which are route dependent.
  history.set = history.replace;

  history.push = action('history.push');
  history.replace = action('history.replace');
  history.go = action('history.go');
  history.goBack = action('history.goBack');
  history.goForward = action('history.goForward');

  addDecorator(story => <Router history={history}>{story()}</Router>);
  addDecorator(story => <Container fixed>{story()}</Container>)

  return (route) => history.set(route);
}

function loadStories() {
  require('../stories/index');
}

const setRoute = bindRouting();
configure(loadStories, module);

export {
  setRoute
};
