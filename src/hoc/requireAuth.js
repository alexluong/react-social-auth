import React, { Component } from 'react';

const requireAuth = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      
    }

    render() {
      return <WrappedComponent {...this.props} hi="there" />
    }
  };
};

export default requireAuth;