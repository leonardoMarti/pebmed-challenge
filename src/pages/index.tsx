import React from 'react';
import Head from 'next/head';
import { Container } from './plans.module';
import { CreditCards } from '../components/CreditCards';

export default function Plans() {
  return (
    <Container>
      <Head>
        <title>Whitebook</title>
      </Head>
      <h1>Estamos quase lá!</h1>

      <h2>Insira seus dados de pagamento abaixo:</h2>

      <CreditCards />
    </Container>
  );
}
