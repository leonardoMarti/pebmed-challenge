import React from 'react';
import { Container } from './styles';

interface SelectProps {
  name: string;
  label: string;
  placeholder?: string;
}

export function Select({ name, label, placeholder }: SelectProps) {
  return (
    <Container>
      <span>{label}</span>
      <select id={`select-${name}`} name={name} placeholder={placeholder}>
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
    </Container>
  );
}
