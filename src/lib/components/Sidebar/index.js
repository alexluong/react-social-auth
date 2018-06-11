import React from 'react';
import SidebarComponent from './Sidebar';

import { Toggle } from '../../elements/Toggle';

class Sidebar extends React.Component {
  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <SidebarComponent {...this.props} open={on} onControlClick={toggle} />
        )}
      </Toggle>
    );
  }
}

export { Sidebar };
