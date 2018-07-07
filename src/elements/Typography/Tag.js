import styled from 'styled-components';
import transformTag from 'utilities/transformTag';
import Color from 'utilities/Color';

const Tag = styled(transformTag)`
  color: ${props => Color.get(props.color)};
`;

export default Tag;
