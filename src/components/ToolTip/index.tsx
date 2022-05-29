import React, { useState } from 'react';
import Image from 'next/image';
import { Container, SToolTip } from './styles';

interface ToolTipProps {
  id: string;
  label: string;
  description: string;
}

export function ToolTip({ id, label, description }: ToolTipProps) {
  const [show, setShow] = useState(false);

  return (
    <Container
      id={id}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="label">{label}</span>
      <Image src="/images/help.svg" width="14px" height="14px" alt="Help" />
      <SToolTip className="toolTip" show={show}>
        {description}
      </SToolTip>
    </Container>
  );
}
