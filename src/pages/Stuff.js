import React    from 'react';
import { Link } from 'react-router-dom';

import { Modal } from 'components/Portals';

class Stuff extends React.Component {
  render() {
    return (
      <div>
        <h1>Main App</h1>
        <Link to="/facebook">Facebook</Link>
        <Modal>
          <h1>Hello from the other side</h1>
        </Modal>
      </div>
    );
  }
}

export default Stuff;