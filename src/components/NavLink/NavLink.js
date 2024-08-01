import React from "react";

import styled from 'styled-components';

import {WEIGHTS} from '../../constants';

function NavLink({children, ...delegated}) {
  return <Wrapper {...delegated}>
    <DefaultBody>
      {children}
    </DefaultBody>
    <HoverBody aria-hidden={true}>
      {children}
    </HoverBody>
  </Wrapper>;
}

export default NavLink;

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  } 
`;

const duration = '500ms';

const Body = styled.span`
  transform: translateY(var(--translate-from));

  ${Wrapper}:hover & {
    transform: translateY(var(--translate-to));
    transition: transform ${duration};
  }
  transition: transform ${duration};
`

const DefaultBody = styled(Body)`
  --translate-from: 0%;
  --translate-to: -100%;
  position: relative;
  display: block;
`

const HoverBody = styled(Body)`
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
`