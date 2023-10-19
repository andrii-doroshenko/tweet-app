import { Oval } from 'react-loader-spinner';

const override = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
};

export const Loader = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="#5CD3A8"
        wrapperStyle={override}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ebd8ff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
