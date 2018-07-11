import React from 'react';

const SearchIcon = ({ color, ...props }) => (
  <svg {...props} width="100%" height="100%" viewBox="0 0 100 100">
    <path fill={color} d="M80.65 66.78a33.55 33.55 0 0 1-47.44-47.44 33.55 33.55 0 1 1 47.44 47.44zm6.73-54.16a43.06 43.06 0 0 0-65.32 55.71L2 88.39A6.8 6.8 0 0 0 11.61 98l20.06-20.06a43.06 43.06 0 0 0 55.71-65.32z" />
  </svg>
);

export default SearchIcon;
