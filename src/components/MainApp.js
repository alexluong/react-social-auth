import React from 'react';

const MainApp = (props) => {
  console.log(props);
  return (
    <main>
      <h1>Hello</h1>
      {props.children}
    </main>
  );
};

export default MainApp;