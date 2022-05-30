import React from 'react';
import { render } from '@testing-library/react';
import { Plans } from '.';

const plans = [
  {
    id: 32,
    storeId: 'anual_parcelado_iugu',
    title: 'Premium Anual',
    description: 'Parcelado',
    caption: '7 Dias Grátis',
    fullPrice: 600,
    discountAmmount: 60,
    discountPercentage: 0.1,
    periodLabel: 'mês',
    period: 'annually',
    discountCouponCode: null,
    order: 1,
    priority: 1,
    gateway: 'iugu',
    splittable: true,
    installments: 12,
    acceptsCoupon: true,
  },
  {
    id: 33,
    storeId: 'anual_a_vista_iugu',
    title: 'Premium Anual',
    description: 'À Vista',
    caption: '7 Dias Grátis',
    fullPrice: 7200,
    discountAmmount: 720,
    discountPercentage: 0.1,
    periodLabel: 'ano',
    period: 'annually',
    discountCouponCode: null,
    order: 2,
    priority: 2,
    gateway: 'iugu',
    splittable: false,
    installments: 1,
    acceptsCoupon: true,
  },
];

const installmentsList = [
  { label: 'x1', value: 1 },
  { label: 'x12', value: 12 },
];

describe('Plans page', () => {
  const planPage = render(
    <Plans installmentsList={installmentsList} plans={plans} />
  );

  it('renders correctly', () => {
    expect(planPage).toBeTruthy();
  });
});
