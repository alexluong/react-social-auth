import React from 'react';
import { Spring } from 'react-spring';
import Modal from 'components/Modal';
import Toggle from 'utilities/Toggle';
import Color from 'utilities/Color';

class AnimationPage extends React.Component {
  render() {
    const message = 'Hello from the other sidee';
    return (
      <div>
        <Toggle>
          {({ on, toggle, close }) => (
            <React.Fragment>
              <button onClick={toggle}>Click me</button>
              <Modal isOpen={on} closeModal={close} overlayOpacity={0.9}>
                <h1>{message}</h1>
              </Modal>
            </React.Fragment>
          )}
        </Toggle>

        <Toggle>
          {({ on, toggle }) => (
            <Spring
              from={{ height: '200px' }}
              to={{ height: on ? '500px' : '200px' }}
              toggle={toggle}
              children={Content}
            />
          )}
        </Toggle>
      </div>
    );
  }
}

export default AnimationPage;

const Content = ({ height, toggle }) => {
  return (
    <div
      style={{ height, backgroundColor: Color.get('primary') }}
      onClick={toggle}
    />
  );
};
