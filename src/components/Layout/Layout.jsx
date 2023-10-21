import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Main = styled.main`
  margin-bottom: 30px;
`;

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </LayoutContainer>
  );
}
