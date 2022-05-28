import React from 'react';
import Head from 'next/head';
import { Container, LeftSection, RightSection } from './plans.module';
import { CreditCards } from '../components/CreditCards';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { RadioCard } from '../components/RadioCard';

export default function Plans() {
  return (
    <Container>
      <Head>
        <title>Whitebook</title>
      </Head>
      <LeftSection>
        <Title label="Estamos quase lá!" mb={0.625} />
        <h2 className="subTitle">Insira seus dados de pagamento abaixo:</h2>

        <div className="creditCardWrapper">
          <CreditCards />
        </div>

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
          mb="2.5"
        />
        <Button name="submitPlans" type="submit" label="Finalizar pagamento" />
      </LeftSection>
      <RightSection>
        <Title label="Confira o seu plano:" mb={0.375} />
        <span className="email">fulano@cicrano.com.br</span>
        <div className="radioCardWrapper">
          <RadioCard name="test" />
          <RadioCard name="test" />
        </div>
      </RightSection>
    </Container>
  );
}
