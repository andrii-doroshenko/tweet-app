import { Oval } from 'react-loader-spinner';

const override = {
  marginTop: '1em',
  marginBottom: '1em',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Loader = () => {
  return (
    <Oval
      height={60}
      width={60}
      color="#5CD3A8"
      wrapperStyle={override}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ebd8ff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
