import React from 'react';
import { render, screen } from '@testing-library/react';
import { Show } from '.';

describe('Show component', () => {
  it('renders correctly', () => {
    render(<Show when={true}>Children</Show>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should not render the component when param "when" as false', () => {
    const showComponent = render(<Show when={false}>Children</Show>);
    expect(showComponent).toBeEmptyDOMElement;
  });
});
