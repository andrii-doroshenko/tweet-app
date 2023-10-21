import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  margin-bottom: 1em;
`;

export const Nav = styled.nav`
  /* box-shadow: 0px 0px 8px 10px rgba(0, 0, 0, 0.6); */
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;

  & .active {
    color: #373737;
  }
`;

export const List = styled.ul`
  margin: 0;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: #9783a9;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #54387f;
  }
`;
