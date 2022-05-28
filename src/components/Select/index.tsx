import React from 'react';
import { Container } from './styles';

interface SelectProps {
  name: string;
  label: string;
  placeholder?: string;
  mb?: string;
}

export function Select({ name, label, placeholder, mb }: SelectProps) {
  const installmentsList = [
    { label: 'x1', value: 1 },
    { label: 'x2', value: 2 },
    { label: 'x4', value: 4 },
    { label: 'x6', value: 6 },
    { label: 'x12', value: 12 },
  ];

  return (
    <Container mb={mb}>
      <span className="label">{label}</span>
      <select
        id={`select-${name}`}
        className="select"
        name={name}
        placeholder={placeholder}
      >
        {installmentsList?.map((inst) => (
          <option key={inst?.value} value={inst?.value}>
            {inst?.label}
          </option>
        ))}
      </select>
    </Container>
  );
}
