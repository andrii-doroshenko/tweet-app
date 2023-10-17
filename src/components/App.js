import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';
import Button from './loadMoreBtn/LoadMoreBtn';
import Cards from './cards/Card';
import { getData, updateData } from 'services/mockDB';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getData('/users', page);

        if (data.length === 0) {
          setNoMoreResults(true);
          console.error('No more results');
        }

        setUsers(prevUsers => [...prevUsers, ...data]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, [page]);

  const handleClick = async id => {
    const updatedUsers = users.map(user =>
      user.id === id
        ? {
            ...user,
            isFollowing: !user.isFollowing,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          }
        : user
    );

    await updateData(
      `/users/${id}`,
      updatedUsers.find(user => user.id === id)
    );

    setUsers(updatedUsers);
  };

  const handleLoadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <Container>
        <Cards users={users} onHandleChange={handleClick} />
        {!noMoreResults && (
          <Button onClick={handleLoadMoreImages}>Load more</Button>
        )}
      </Container>
    </main>
  );
}

export default App;
