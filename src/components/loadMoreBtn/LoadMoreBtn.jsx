import React from 'react';
import { LoadMoreBtn } from './LoadMoreBtn.styled';

export const Button = ({ onClick, children }) => (
  <LoadMoreBtn onClick={onClick} type="button">
    {children}
  </LoadMoreBtn>
);

export default Button;
