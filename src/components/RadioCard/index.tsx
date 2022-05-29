import React from 'react';
import { Container } from './styles';

interface RadioCardProps {
  name: string;
}

export function RadioCard({ name }: RadioCardProps) {
  return (
    <Container id={name}>
      <div className="content">
        <span className="title">Anual | À Vista</span>
        <div className="priceWrapper">
          <span className="price">De R$ 514,80 | Por R$ 436,90</span>
          <div className="discount">-15%</div>
        </div>
        <span className="installments">10x de R$ 43,69/mês</span>
      </div>
      <div>
        <input className="radio" type="radio" name="radio" id="radio1" />
      </div>
    </Container>
  );
}
