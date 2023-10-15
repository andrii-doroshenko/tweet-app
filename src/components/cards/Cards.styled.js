import styled from 'styled-components';
import { ReactComponent as PictureIcon } from './img/picture.svg';
import { ReactComponent as LogoIcon } from './img/logo.svg';

export const List = styled.ul`
  margin: 15px auto;
  width: 380px;

  @media screen and (min-width: 768px) {
    width: 775px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const Item = styled.li`
  position: relative;
  margin-bottom: 15px;
  width: 380px;
  height: 460px;
  color: #ebd8ff;
  text-transform: uppercase;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledPictureIcon = styled(PictureIcon)`
  position: absolute;
  left: 10%;
  top: 6%;
  animation: floating 3s ease-in-out infinite;
  @keyframes floating {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledLogoIcon = styled(LogoIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Container = styled.div`
  position: absolute;
  top: 178px;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  text-align: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 14%;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
`;

export const Content = styled.div`
  margin: 26px 0;

  & > p:first-of-type {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  min-width: 196px;
  background-color: ${props => (props.isFollowing ? '#5CD3A8' : '#ebd8ff')};
  color: #373737;
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px 3.5px 3.5px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.isFollowing ? '#ebd8ff' : '#5CD3A8')};
  }
`;
