import React    from 'react';
import { Link } from 'react-router-dom';

class Stuff extends React.Component {
  render() {
    return (
      <div>
        <h1>Main App</h1>
        <Link to="/facebook">Facebook</Link>
      </div>
    );
  }
}

export default Stuff;