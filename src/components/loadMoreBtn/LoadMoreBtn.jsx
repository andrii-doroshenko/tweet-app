import React from 'react';
import { LoadMoreBtn } from './LoadMoreBtn.styled';

export const Button = ({ onClick, isLoading, children }) => (
  <LoadMoreBtn onClick={onClick} type="button" disabled={isLoading}>
    {children}
  </LoadMoreBtn>
);

export default Button;
