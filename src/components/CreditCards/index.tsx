import React from 'react';
import Image from 'next/image';
import { Container } from './styles';

interface CreditCardsProps {
  id: string;
}

export function CreditCards({ id }: CreditCardsProps) {
  return (
    <Container id={id}>
      <div className="cardsWrapper">
        <Image
          src="/images/master.svg"
          width="32px"
          height="23px"
          alt="Master"
        />
        <Image
          src="/images/dinners-club.svg"
          width="32px"
          height="23px"
          alt="Dinners club"
        />
        <Image
          src="/images/american-express.svg"
          width="32px"
          height="23px"
          alt="American express"
        />
        <Image src="/images/visa.svg" width="32px" height="23px" alt="Visa" />
        <Image src="/images/elo.svg" width="32px" height="23px" alt="Elo" />
      </div>

      <div className="paymentsForWrapper">
        <span className="paymentsFor">Pagamentos por</span>
        <Image src="/images/iugu.svg" width="29px" height="11px" alt="Iugu" />
      </div>
    </Container>
  );
}
