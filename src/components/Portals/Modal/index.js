import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

import { getColor, elevation, position } from 'config/theme';

import Portal from '../Portal';
import Icon   from 'components/Icon';

class Modal extends React.Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  };

  static defaultProps = {
    closeButton: true
  };

  renderCloseButton() {
    const { closeButton, close } = this.props;
    if (!closeButton) {
      return null;
    }

    return (
      <CloseButton onClick={close}>
        <Icon name="close" width={16} height={16} />
      </CloseButton>
    );
  }

  renderOverlay() {
    const { closeOnOverlayClick, close } = this.props;
    const onOverlayClick = closeOnOverlayClick ? close : () => {};
    
    return <Background onClick={onOverlayClick} />
  }

  render() {
    const { isOpen, children } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <Portal>
        <ModalWrapper>
          <ModalCard>
            { this.renderCloseButton() }
            { children }
          </ModalCard>
          { this.renderOverlay() }
        </ModalWrapper>
      </Portal>
    )
  }
}

export default Modal;

const ModalWrapper = styled.div`
  ${position('absolute')}
  width: 100%;
  height: 100%;
  ${position('centerChildren')}
`;

const ModalCard = styled.div`
  position: relative;
  background: ${getColor('background')};
  border-radius: 2px;
  box-shadow: ${elevation(4)};
  padding: 2rem;
  min-width: 400px;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
`;