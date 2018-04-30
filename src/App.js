import React, { Component } from 'react';
import config from './config';

class App extends Component {
  render() {
    console.log(config);
    return (
      <div>
        <a href={`${config.google.start}`}>Sign In with Google</a>
      </div>
    );
  }
}

export default App;