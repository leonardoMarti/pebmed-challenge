import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToolTip } from '.';

describe('ToolTip component', () => {
  it('renders correctly', () => {
    render(
      <ToolTip
        id="tool-tip-id"
        label="Tool tip label"
        description="Tool tip description"
      />
    );

    expect(screen.getByText('Tool tip label')).toBeInTheDocument();
    expect(screen.getByText('Tool tip description')).toBeInTheDocument();
  });
});
