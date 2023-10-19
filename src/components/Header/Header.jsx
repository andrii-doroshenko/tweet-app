import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;

  & .active {
    color: #373737;
    text-decoration: underline;
  }
`;

const List = styled.ul`
  margin: 0;
`;

const Item = styled.li`
  display: inline-block;
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: #666;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledLink to="/">Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to="tweets">Tweets</StyledLink>
        </Item>
      </List>
    </Nav>
  );
};

export default Header;
