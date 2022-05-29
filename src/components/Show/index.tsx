import React, { ReactNode } from 'react';

interface ShowProps {
  when: boolean;
  children: ReactNode;
}

export function Show({ when, children }: ShowProps) {
  return when ? <>{children}</> : <></>;
}
