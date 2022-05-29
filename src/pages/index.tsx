import React from 'react';
import Head from 'next/head';
import { Container, LeftSection, RightSection } from './plans.module';
import { CreditCards } from '../components/CreditCards';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { RadioCard } from '../components/RadioCard';
import { ToolTip } from '../components/ToolTip';
import { WindowDimension } from '../hooks/window-dimension';
import { BREAKPOINTS } from '../constants/media-queries';

export default function Plans() {
  const windowWidth = WindowDimension();

  return (
    <>
      <Head>
        <title>Whitebook - Planos</title>
      </Head>

      <Container>
        <LeftSection>
          <div className="titleWrapper">
            <Title label="Estamos quase lá!" mb={0.625} />
            <h2 className="subTitle">Insira seus dados de pagamento abaixo:</h2>
          </div>

          <div className="creditCardWrapper">
            <CreditCards />
          </div>

          <Input
            name="creditCardNumber"
            label="Número do cartão"
            placeholder="0000 0000 0000 0000"
          />
          <div className="inputWrapper">
            <Input
              name="creditCardExpirationDate"
              label="Validade"
              placeholder="MM/AA"
            />
            <Input name="creditCardCVV" label="CVV" placeholder="000" />
          </div>

          <Input
            name="creditCardHolder"
            label="Nome impresso no cartão"
            placeholder="Seu nome"
          />
          <Input
            name="creditCardCPF"
            label="CPF"
            placeholder="000.000.000-00"
          />
          <Input name="couponCode" label="Cupom" placeholder="Insira aqui" />
          <Select
            name="installments"
            label="Número de parcelas"
            placeholder="Selecionar"
            mb="2.5"
          />
          <div>
            <Button
              name="submitPlans"
              type="submit"
              hidden={windowWidth < BREAKPOINTS.SM}
            >
              <span className="buttonLabel">Finalizar pagamento</span>
            </Button>
          </div>
        </LeftSection>
        <RightSection>
          <div className="titleWrapper">
            <Title label="Confira o seu plano:" mb={0.375} />
            <span className="email">fulano@cicrano.com.br</span>
          </div>

          <div className="radioCardWrapper">
            <RadioCard name="test" />
            <RadioCard name="test" />
          </div>
          <div className="toolTipWrapper">
            <ToolTip
              id="help-tool-tip"
              label="Sobre a cobrança"
              description="Descrição da cobrança"
            />
          </div>

          <Button
            name="submitPlans"
            type="submit"
            hidden={windowWidth > BREAKPOINTS.SM}
          >
            <span className="buttonLabel">Finalizar pagamento</span>
          </Button>
        </RightSection>
      </Container>
    </>
  );
}
