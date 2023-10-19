import React, { useState, useEffect } from 'react';
import Button from 'components/loadMoreBtn/LoadMoreBtn';
import Cards from 'components/cards/Card';
import { getData, updateData } from 'services/mockDB';
import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const { data } = await getData('/users', page);
        // console.log(data.length);
        //         if (data.length === 0) {
        //           setNoMoreResults(true);
        //         }
        setNoMoreResults(data.length < 3);

        setUsers(prevUsers => [...prevUsers, ...data]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
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
        {isLoading && <Loader />}
        {!noMoreResults && (
          <Button isLoading={isLoading} onClick={handleLoadMoreImages}>
            Load more
          </Button>
        )}
      </Container>
    </main>
  );
}
