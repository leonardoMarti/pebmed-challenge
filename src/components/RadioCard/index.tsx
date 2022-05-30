import React from 'react';
import { calculateDiscount, formatCurrency } from '../../utils/currency';
import { Show } from '../Show';
import { Container } from './styles';

interface RadioCardProps {
  id: string;
  value: number;
  checked?: boolean;
  register?: object;
  title: string;
  discount: number;
  price: number;
  installments: number;
}

export function RadioCard({
  id,
  value,
  register,
  checked = false,
  title,
  discount,
  price,
  installments,
}: RadioCardProps) {
  console.log(
    'VALUES',
    id,
    value,
    register,
    (checked = false),
    title,
    discount,
    price,
    installments
  );
  const discountedPrice = calculateDiscount(price, discount);

  const handlePrice = (price: number) => {
    return `De ${formatCurrency(price)} | Por ${formatCurrency(
      discountedPrice
    )}`;
  };

  const handleInstallments = () => {
    const installmentAmount = discountedPrice / installments;
    return `${installments}x de ${formatCurrency(installmentAmount)}/mês`;
  };

  return (
    <Container id={id}>
      <div className="content">
        <span className="title">{title}</span>
        <div className="priceWrapper">
          <Show when={Boolean(price && discount)}>
            <span className="price">{handlePrice(price)}</span>
          </Show>
          <Show when={discount > 0}>
            <div className="discount">{`-${discount * 100}%`}</div>
          </Show>
        </div>
        <Show when={Boolean(discountedPrice && installments)}>
          <span className="installments">{handleInstallments()}</span>
        </Show>
      </div>
      <div>
        <input
          className="radio"
          type="radio"
          id={id}
          value={value}
          {...register}
          defaultChecked={checked}
        />
      </div>
    </Container>
  );
}
