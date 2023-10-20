import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  margin-bottom: 30px;
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
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
