import styled from 'styled-components';
import Color from 'utilities/Color';

const Section = styled.div`
  width: 100%;
  background-color: ${Color.get('white')};
  border-radius: 2px;
  padding: 4rem;
  margin-bottom: 4rem;
`;

const SectionHeading = styled.h1`
  font-size: 3.2rem;
`;

export { SectionHeading };
export default Section;
