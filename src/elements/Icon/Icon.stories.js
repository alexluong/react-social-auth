import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('close icon', () => <Icon name="close" />)
  .add('with color', () => <Icon name="close" color="primary" />)
  .add('with size', () => <Icon name="close" size={24} />);
