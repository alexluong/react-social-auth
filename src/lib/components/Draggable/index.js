import React from 'react';
import styled from 'styled-components';
import { Spring, animated, interpolate } from 'react-spring';
import { Gesture } from 'react-with-gesture';

class Draggable extends React.Component {
  onMouseUp = (xDelta, yDelta) => () => {
    console.log(xDelta, yDelta);
  };

  render() {
    return (
      <Gesture>
        {({ down, xDelta, yDelta }) => (
          <Spring
            to={down ? { x: xDelta, y: yDelta } : { x: 0, y: 0 }}
            imediate={name => down && name === 'x'}
            native
          >
            {({ x, y }) => (
              <CardContainer>
                <Card
                  style={{
                    transform: interpolate(
                      [x, y],
                      (x, y) => `translate(${x}px, ${y}px)`,
                    ),
                  }}
                  onMouseUp={this.onMouseUp(xDelta, yDelta)}
                >
                  <h1>Drag Me</h1>
                </Card>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

export { Draggable };

const CardContainer = styled.div`
  background: pink;
  position: relative;
  max-width: 300px;
  height: 200px;
  margin: 0 auto;
`;

const Card = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
`;
