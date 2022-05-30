import React from 'react';
import { SButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  name: string;
  type: 'submit' | 'button' | 'reset';
}

export function Button({ children, type, name }: ButtonProps) {
  return (
    <SButton id={`button-${name}`} type={type}>
      {children}
    </SButton>
  );
}
