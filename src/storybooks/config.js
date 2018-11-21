import { configure } from '@storybook/react';

function loadStories() {
  require('./index');
  // You can require as many stories as you need.
}

configure(loadStories, module);