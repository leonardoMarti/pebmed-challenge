import React from 'react';
import Image from 'next/image';
import { Container } from './styles';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  return (
    <Container>
      <div onClick={() => router.back()}>
        <Image
          src="/images/arrow-left.svg"
          width="8px"
          height="13px"
          alt="Arrow left"
        />
      </div>

      <div className="imageWrapper">
        <Image
          src="/images/logo.svg"
          width="40px"
          height="30px"
          alt="Whitebook"
        />
      </div>
    </Container>
  );
}
