import React from 'react';

class Toggle extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  };

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default Toggle;