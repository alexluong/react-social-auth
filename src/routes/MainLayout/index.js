import React from 'react';

class MainLayout extends React.Component {
  render() {
    return (
      <div style={{ width: '80vw', margin: '5rem auto'}}>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;