import React from 'react';
import PropTypes from 'prop-types';

class Typography extends React.Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    color: PropTypes.string,
  };

  static defaultProps = {
    tag: 'p',
  };

  render() {
    return <div>Hi</div>;
  }
}

export default Typography;
