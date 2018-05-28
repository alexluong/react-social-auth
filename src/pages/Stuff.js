  import React    from 'react';
import { Link }   from 'react-router-dom';
import { Spring } from 'react-spring';

import { Modal } from 'components/Portals';
import Toggle    from 'components/Toggle';

class Stuff extends React.Component {
  render() {
    const message = 'Hello from the other sidee';
    return (
      <div>
        <h1>Stuff</h1>
        <Link to="/facebook">Facebook</Link>
        <Toggle>
          {({ on, toggle, close }) => (
            <React.Fragment>
              <button onClick={toggle}>Click me</button>
              <Modal isOpen={on} close={close} overlayOpacity={.3}>
                <h1>{ message }</h1>
              </Modal>
            </React.Fragment>
          )}
        </Toggle>

        <hr/>
        
        <Toggle>
          {({ on, toggle }) => (
            <Spring
              from={{ height: '200px'}}
              to={{ height: on ? '500px' : '200px'}}
              toggle={toggle}
              children={Content}
              onRest={() => console.log('onRest')}
            />
          )}
        </Toggle>

        <h1>Hi</h1>
      </div>
    );
  }
}

const Content = ({ height, toggle }) => {
  return <div style={{ height, backgroundColor: 'pink' }} onClick={toggle} />;
}

export default Stuff;