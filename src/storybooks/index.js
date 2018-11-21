import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button'
import Twitter from '../twitter';

storiesOf('Button', module)
  .add('with text', () => (
    <Button 
        id='id'
        value='butten'
        class='btn'
        clickFunct={()=> console.log('brains')}
    />
  ))
  .add('with some emoji', () => (
    <Twitter />
  ));   