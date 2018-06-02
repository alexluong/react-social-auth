import React from 'react';
import PropTypes from 'prop-types';

import { Color } from 'config/theme';

// Icons
import CloseIcon from './CloseIcon';

class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    color: new Color('text').get(),
    width: 16,
    height: 16,
  };

  render() {
    const { name, color, width, height } = this.props;
    const colorInstance = new Color(color);
    const renderedColor = colorInstance.exist() ? colorInstance.get() : color;

    switch (name) {
      case 'close':
        return (
          <CloseIcon color={renderedColor} width={width} height={height} />
        );
      default:
        console.error(`ERROR: ${name} is not an icon`);
        return <span>Error</span>;
    }
  }
}

export default Icon;
