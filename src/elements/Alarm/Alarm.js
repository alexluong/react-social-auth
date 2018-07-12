import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition, animated } from 'react-spring';

const propTypes = {
  message: PropTypes.string.isRequired,
};
const defaultProps = {
  style: {},
};

const Alarm = ({ message, style, ...props }) => {
  return (
    <Transition
      native
      from={{ height: 0, opacity: 0 }}
      enter={{ height: 'auto', opacity: 1 }}
      leave={{ height: 0, opacity: 0 }}
    >
      {message
        ? styles => (
            <StyledAlarm
              {...props}
              style={{
                ...style,
                ...styles,
              }}
            >
              {message}
            </StyledAlarm>
          )
        : () => <div style={{ position: 'absolute' }} />}
    </Transition>
  );
};
Alarm.propTypes = propTypes;
Alarm.defaultProps = defaultProps;
export default Alarm;

const StyledAlarm = styled(animated.div)`
  width: 100%;
  padding: 1rem;
  background-color: red;
`;
