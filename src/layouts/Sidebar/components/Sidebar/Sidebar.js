import React from 'react';

import OpenedSidebar from './Opened';
import ClosedSidebar from './Closed';

class Sidebar extends React.Component {
  render() {
    const { isOpen } = this.props;
    if (isOpen) {
      return <OpenedSidebar {...this.props} />;
    } else {
      return <ClosedSidebar {...this.props} />;
    }
  }
}

export default Sidebar;
