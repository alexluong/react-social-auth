import React from 'react';

const CloseIcon = ({ color, ...props }) => (
  <svg {...props} width="100%" height="100%" viewBox="0 0 31.11 31.11">
    <polygon
      fill={color}
      points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97 29.7,31.11 31.11,29.7 16.97,15.56"
    />
  </svg>
);

export default CloseIcon;
