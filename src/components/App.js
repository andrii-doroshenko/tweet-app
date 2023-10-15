import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';
import Button from './loadMoreBtn/LoadMoreBtn';
import { getData, updateData } from 'services/mockDB';
import Cards from './cards/Card';

function App() {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  // const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);

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

  useEffect(() => {
    const jsonUsers = JSON.stringify(users);
    localStorage.setItem('users', jsonUsers);
  }, [users]);

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
        {noMoreResults && <p>No more results</p>}
      </Container>
    </main>
  );
}

export default App;
