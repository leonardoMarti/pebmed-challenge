import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioCard } from '.';

describe('RadioCard component', () => {
  const { debug } = render(
    <RadioCard
      id="radio-card"
      value={1}
      title="Radio title"
      discount={0.1}
      price={100}
      installments={1}
    />
  );

  console.log(debug());

  it('renders correctly', () => {
    expect(screen.getByText('Radio title')).toBeInTheDocument();
  });
});
