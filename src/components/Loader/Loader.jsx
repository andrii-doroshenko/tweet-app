import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';
import { FallingLines } from 'react-loader-spinner';

const override = {
  marginTop: '1em',
  marginBottom: '1em',
  justifyContent: 'center',
  alignItems: 'center',
};

const LazyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <Oval
      height={60}
      width={60}
      color="#5CD3A8"
      wrapperStyle={override}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ebd8ff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export const LazyLoader = () => {
  return (
    <LazyWrapper>
      <FallingLines
        width={100}
        color="#5CD3A8"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LazyWrapper>
  );
};
