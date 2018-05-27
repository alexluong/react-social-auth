import React     from 'react';
import PropTypes from 'prop-types';

import CloseIcon from './CloseIcon';

class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    color: '#000',
    width: 16,
    height: 16
  };

  render() {
    const { name, color, width, height } = this.props;

    switch (name) {
      case 'close':
        return <CloseIcon color={color} width={width} height={height} />
      default:
        console.error(`ERROR: ${name} is not an icon`);
        return <span>Error</span>;
    }
  }
}

export default Icon;