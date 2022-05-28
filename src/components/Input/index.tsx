import React from 'react';
import { Container } from './styles';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export function Input({ name, label, placeholder, type = 'text' }: InputProps) {
  return (
    <Container>
      <span>{label}</span>
      <input
        id={`input-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
}
