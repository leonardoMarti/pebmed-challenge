import React from 'react';
import { Container } from './styles';

interface Option {
  label: string;
  value: number;
}

interface SelectProps {
  name: string;
  label: string;
  placeholder?: string;
  mb?: string;
  options: Option[];
}

export function Select({ options, name, label, placeholder, mb }: SelectProps) {
  return (
    <Container mb={mb}>
      <span className="label">{label}</span>
      <select
        id={`select-${name}`}
        className="select"
        name={name}
        placeholder={placeholder}
      >
        {options?.map((inst) => (
          <option key={inst?.value} value={inst?.value}>
            {inst?.label}
          </option>
        ))}
      </select>
    </Container>
  );
}
