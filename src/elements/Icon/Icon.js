import React from 'react';
import PropTypes from 'prop-types';
import Color from 'utilities/Color';
// Icons
import CloseIcon from './icons/CloseIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    /** px value */
    size: PropTypes.number,
  };

  static defaultProps = {
    color: 'default',
    size: 16,
  };

  render() {
    const { name, color, size, ...props } = this.props;

    switch (name) {
      case 'close':
        return <CloseIcon {...props} color={Color.get(color)} size={size} />;
      case 'arrow-left':
        return (
          <ArrowLeftIcon {...props} color={Color.get(color)} size={size} />
        );
      default:
        console.error(`ERROR: ${name} is not an icon`);
        return <span>Error</span>;
    }
  }
}

export default Icon;
