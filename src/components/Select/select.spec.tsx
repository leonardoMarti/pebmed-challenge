import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from '.';

const installmentsList = [
  { label: 'x1', value: 1 },
  { label: 'x2', value: 2 },
  { label: 'x4', value: 4 },
  { label: 'x6', value: 6 },
  { label: 'x12', value: 12 },
];

describe('Select component', () => {
  it('renders correctly', () => {
    render(
      <Select options={installmentsList} name="name" label="Select label" />
    );

    expect(screen.getByText('Select label')).toBeInTheDocument();
  });
});
