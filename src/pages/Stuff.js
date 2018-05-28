import React    from 'react';
import { Link } from 'react-router-dom';

import { Modal } from 'components/Portals';
import Toggle    from 'components/Toggle';

class Stuff extends React.Component {
  render() {
    return (
      <div>
        <h1>Stuff</h1>
        <Link to="/facebook">Facebook</Link>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button onClick={toggle}>Click me</button>
              <Modal isOpen={on} close={toggle} closeOnOverlayClick={false}>
                <h1>Hello from the other side</h1>
              </Modal>
            </React.Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default Stuff;