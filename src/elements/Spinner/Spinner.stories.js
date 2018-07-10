import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Spinner from './Spinner';

storiesOf('Elements/Spinner', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('spinner', () => <Spinner />)
  .add('with color', () => <Spinner color="primary" />);

storiesOf('Elements/Spinner/sizes', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('small', () => <Spinner size="s" />)
  .add('medium/default', () => <Spinner size="m" />)
  .add('large', () => <Spinner size="l" />)
  .add('custom', () => <Spinner size={200} />);
