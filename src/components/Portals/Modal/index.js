import React  from 'react';
import styled from 'styled-components';

import Portal from '../Portal';
import Toggle from 'components/Toggle';

class Modal extends React.Component {
  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <React.Fragment>
            <button onClick={toggle}>Click Me</button>
            { on && (
              <Portal>
                <ModalWrapper>
                  <ModalCard>
                    <CloseButton onClick={toggle}>Close</CloseButton>
                    { this.props.children }
                  </ModalCard>
                  <Background onClick={toggle} />
                </ModalWrapper>
              </Portal>
            )}
          </React.Fragment>
        )}
      </Toggle>
    );
  }
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0,0,0,.3);
  padding: 2rem;
  min-width: 400px;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
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