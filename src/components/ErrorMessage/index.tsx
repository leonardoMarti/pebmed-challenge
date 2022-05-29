import React from 'react';
import { Error } from './styles';

interface ErrorMessageProps {
  children: string;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <Error>{children}</Error>;
}
