import React from 'react';
import { Container, SInput } from './styles';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export function Input({ name, label, placeholder, type = 'text' }: InputProps) {
  return (
    <Container>
      <span className="label">{label}</span>
      <SInput
        id={`input-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
}
