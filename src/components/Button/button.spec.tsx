import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    render(
      <Button name="button" type="button">
        Button Label
      </Button>
    );

    expect(screen.getByText('Button Label')).toBeInTheDocument();
  });
});
