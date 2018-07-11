import React from 'react';

const HomeIcon = ({ color, ...props }) => (
  <svg {...props} width="100%" height="100%" viewBox="0 0 64 64">
    <path fill={color} d="M32 3L2 33h9v30h12V47h16v16h12V33h11z" />
  </svg>
);

export default HomeIcon;
