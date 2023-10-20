import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  display: block;
  min-width: 196px;
  background-color: #ebd8ff;
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

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
