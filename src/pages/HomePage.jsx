import { Container } from 'components/App.styled';
import { StyledLink } from 'components/Header/Header.styled';
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  text-align: center;
`;

const HomePage = () => {
  return (
    <CenteredContainer>
      <h2>Welcome to the Tweet App</h2>
      <p>
        A simple Tweet application built using React, Axios, MockAPI, and Styled
        Components.It allows users to view and fetch tweets with pagination.
        Discover and follow your favorite tweets!
        <span>
          <StyledLink to="/tweets">Go to Bloggers Page</StyledLink>
        </span>
      </p>
    </CenteredContainer>
  );
};

export default HomePage;
