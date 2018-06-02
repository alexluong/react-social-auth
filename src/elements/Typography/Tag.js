import React from 'react';
import styled from 'styled-components';

import { Color } from 'utilities';

const transformTag = ({ tag, children, ...props }) => {
  let element;
  if (typeof tag === 'string') {
    switch (tag) {
      case 'h1':
        element = <h1>{children}</h1>;
        break;
      case 'h2':
        element = <h2>{children}</h2>;
        break;
      case 'h3':
        element = <h3>{children}</h3>;
        break;
      case 'h4':
        element = <h4>{children}</h4>;
        break;
      case 'h5':
        element = <h5>{children}</h5>;
        break;
      case 'h6':
        element = <h6>{children}</h6>;
        break;
      default:
        element = <p>{children}</p>;
        break;
    }
  } else {
    element = tag;
  }

  return React.cloneElement(element, props);
};

const Tag = styled(transformTag)`
  color: ${props => new Color(props.color).get()};
`;

export default Tag;
