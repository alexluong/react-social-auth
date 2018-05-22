import React           from 'react';
import styled, { css } from 'styled-components';
import { Link }        from 'react-router-dom';

const styles = css`
  color: mediumaquamarine;
  display: ${props => props.inline ? 'inline-block' : 'block'};
`;

const StyledALinkButton = styled.a`
  ${styles}
`;

const StyledRRLinkButton = styled(({inline, ...props}) => <Link {...props} />)`
  ${styles}
`;

const LinkButton = ({ isRRLink,...props}) => {
  const returnElement = isRRLink
                          ? <StyledRRLinkButton {...props} />
                          : <StyledALinkButton  {...props} />;
  return returnElement;
};

LinkButton.defaultProps = {
  isRRLink: false,
  inline: true
}

export { LinkButton };