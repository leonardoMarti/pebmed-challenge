import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe('Title component', () => {
  it('renders correctly', () => {
    render(<Title label="Title" />);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
