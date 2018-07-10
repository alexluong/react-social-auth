import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './Button';

storiesOf('Elements/Button/Normal', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('normal button', () => (
    <Button onClick={action('clicked')}>Button</Button>
  ))
  .add('with color', () => (
    <Button onClick={action('clicked')} color="primary">
      Button
    </Button>
  ));

storiesOf('Elements/Button/Outlined', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('outlined button', () => (
    <Button onClick={action('clicked')} variant="outlined">
      Outlined Button
    </Button>
  ))
  .add('with color', () => (
    <Button onClick={action('clicked')} variant="outlined" color="primary">
      Outlined Button
    </Button>
  ));

storiesOf('Elements/Button/Icon', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('icon button', () => (
    <Button onClick={action('clicked')} variant="icon" name="close" />
  ))
  .add('with color', () => (
    <Button
      onClick={action('clicked')}
      variant="icon"
      name="close"
      color="primary"
    />
  ))
  .add('with size', () => (
    <Button
      onClick={action('clicked')}
      variant="icon"
      name="close"
      color="secondary"
      size={24}
    />
  ));

storiesOf('Elements/Button/Link', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .add('link button', () => (
    <Button onClick={action('clicked')} variant="link">
      Link Button
    </Button>
  ))
  .add('with color', () => (
    <Button onClick={action('clicked')} variant="link" color="primary">
      Link Button
    </Button>
  ));
