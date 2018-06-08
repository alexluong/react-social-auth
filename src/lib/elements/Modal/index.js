import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

import { Portal } from '../../helpers/Portal';
import ModalComponent from './ModalComponent';

class Modal extends React.Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    closeOnOverlayClick: PropTypes.bool,
    overlayOpacity: PropTypes.number,
  };

  static defaultProps = {
    closeButton: true,
    closeOnOverlayClick: true,
    overlayOpacity: 0,
  };

  state = {
    on: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen !== state.on) {
      return { on: props.isOpen };
    }
    return null;
  }

  opacity(overlayOpacity = 0, cardOpacity = 0) {
    return {
      overlayOpacity,
      cardOpacity,
    };
  }

  closeModal = () => {
    const { closeOnOverlayClick } = this.props;

    if (closeOnOverlayClick) {
      this.setState({
        on: false,
      });
    }
  };

  onRest = () => {
    if (!this.state.on) {
      this.props.close();
    }
  };

  render() {
    const { isOpen, overlayOpacity, children, closeButton } = this.props;
    const Y_TRANSLATE = -50;

    return (
      <React.Fragment>
        {isOpen && (
          <Portal>
            <Transition
              from={{ ...this.opacity(), yTranslate: Y_TRANSLATE }}
              enter={{ ...this.opacity(overlayOpacity, 1), yTranslate: 0 }}
              leave={{ ...this.opacity(), yTranslate: Y_TRANSLATE }}
              impl={TimingAnimation}
              config={{ duration: 200, easing: Easing.linear }}
              onRest={this.onRest}
              native
            >
              {this.state.on &&
                (styles => (
                  <ModalComponent
                    {...styles}
                    children={children}
                    closeModal={this.closeModal}
                    closeButton={closeButton}
                  />
                ))}
            </Transition>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

export { Modal };
