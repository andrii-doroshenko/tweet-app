import { HeaderContainer, Nav, List, Item, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
