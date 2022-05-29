import React from 'react';
import { SButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  name: string;
  type: 'submit' | 'button' | 'reset';
  hidden?: boolean;
}

export function Button({ children, type, name, hidden = false }: ButtonProps) {
  return (
    <SButton id={`button-${name}`} type={type} hidden={hidden}>
      {children}
    </SButton>
  );
}
