import React from 'react';
import Head from 'next/head';
import { Container } from './plans.module';
import { CreditCards } from '../components/CreditCards';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export default function Plans() {
  return (
    <Container>
      <Head>
        <title>Whitebook</title>
      </Head>
      <h1>Estamos quase lá!</h1>

      <h2>Insira seus dados de pagamento abaixo:</h2>

      <CreditCards />

      <Input
        name="creditCardNumber"
        label="Número do cartão"
        placeholder="0000 0000 0000 0000"
      />
      <Input
        name="creditCardExpirationDate"
        label="Validade"
        placeholder="MM/AA"
      />
      <Input name="creditCardCVV" label="CVV" placeholder="000" />
      <Input
        name="creditCardHolder"
        label="Nome impresso no cartão"
        placeholder="Seu nome"
      />
      <Input name="creditCardCPF" label="CPF" placeholder="000.000.000-00" />
      <Input name="couponCode" label="Cupom" placeholder="Insira aqui" />
      <Select
        name="installments"
        label="Número de parcelas"
        placeholder="Selecionar"
      />
    </Container>
  );
}
