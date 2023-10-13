import { formatFollowers } from 'helpers/formatFollowers';

const Cards = ({ users, onHandleChange }) => {
  return (
    <ul>
      {users.map(({ id, avatar, followers, tweets, isFollowing }) => (
        <li key={id}>
          <img src={avatar} width="100px" alt="user-logo" />
          <p>{tweets} tweets</p>
          <p>{formatFollowers(followers)} followers</p>
          <button
            className={isFollowing ? 'followed' : 'button'}
            onClick={() => onHandleChange(id)}
            type="button"
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
