import React from 'react';

const transformTag = ({ tag, children, ...props }) => {
  const Tag = tag;
  return React.cloneElement(<Tag />, props, children);
};

export { transformTag };
