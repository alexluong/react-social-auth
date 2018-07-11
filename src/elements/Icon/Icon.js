import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'utilities/Color';
// Icons
import ArrowLeftIcon from './icons/ArrowLeft';
import CloseIcon from './icons/Close';
import HomeIcon from './icons/Home';
import SearchIcon from './icons/Search';

const propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  /** px value */
  size: PropTypes.number,
};
const defaultProps = {
  color: 'default',
  size: 16,
};

const Icon = ({ name, color, size, svgProps, ...props }) => {
  let icon;

  switch (name) {
    case 'close':
      icon = <CloseIcon />;
      break;
    case 'arrow-left':
      icon = <ArrowLeftIcon />;
      break;
    case 'home':
      icon = <HomeIcon />;
      break;
    case 'search':
      icon = <SearchIcon />;
      break;
    default:
      console.error(`ERROR: ${name} is not an icon`);
      return null;
  }

  return (
    <Wrapper {...props} size={size}>
      {React.cloneElement(icon, {
        ...svgProps,
        color: Color.get(color),
      })}
    </Wrapper>
  );
};
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
