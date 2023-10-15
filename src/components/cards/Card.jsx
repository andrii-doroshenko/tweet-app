import { formatFollowers } from 'helpers/formatFollowers';
import {
  List,
  Item,
  Avatar,
  StyledPictureIcon,
  StyledLogoIcon,
  Container,
  Content,
  Button,
} from './Cards.styled';

const Cards = ({ users, onHandleChange }) => {
  return (
    <List>
      {users.map(({ id, avatar, followers, tweets, isFollowing }) => (
        <Item key={id}>
          <StyledLogoIcon />
          <StyledPictureIcon />
          <Container>
            <Avatar src={avatar} width="80px" height="80px" alt="user-logo" />
            <Content>
              <p>{tweets} tweets</p>
              <p>{formatFollowers(followers)} followers</p>
            </Content>

            <Button
              onClick={() => onHandleChange(id)}
              $isFollowing={isFollowing}
              type="button"
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </Container>
        </Item>
      ))}
    </List>
  );
};

export default Cards;
