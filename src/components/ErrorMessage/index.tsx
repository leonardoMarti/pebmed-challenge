import React from 'react';
import { Error } from './styles';

interface ErrorMessageProps {
  children: string;
  id: string;
}

export function ErrorMessage({ id, children }: ErrorMessageProps) {
  return (
    <Error id={id} data-testid={id}>
      {children}
    </Error>
  );
}
