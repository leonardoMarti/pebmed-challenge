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
  register?: object;
}

export function Select({
  options,
  name,
  label,
  placeholder,
  register,
  mb,
}: SelectProps) {
  return (
    <Container mb={mb}>
      <span className="label">{label}</span>
      <select
        id={`select-${name}`}
        className="select"
        name={name}
        placeholder={placeholder}
        {...register}
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
