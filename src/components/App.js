import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { getData } from 'services/mockDB';
import Cards from './card/Card';

function App() {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const handleClick = id => {
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
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getData('/users');

        if (data.length === 0) console.error('nothing to catch');
        // isLoading(false);

        setUsers(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const jsonUsers = JSON.stringify(users);
    localStorage.setItem('users', jsonUsers);
  }, [users]);

  return (
    <main>
      <Container>
        <Cards users={users} onHandleChange={handleClick} />
      </Container>
    </main>
  );
}

export default App;
