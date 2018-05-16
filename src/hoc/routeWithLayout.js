import React from 'react';

const routeWithLayout = (WrappedComponent, Layout) => {
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
};

export default routeWithLayout;