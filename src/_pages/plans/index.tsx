import React from 'react';
import { useForm } from 'react-hook-form';

import { CreditCards } from '../../components/CreditCards';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { RadioCard } from '../../components/RadioCard';
import { ToolTip } from '../../components/ToolTip';

import { Container, LeftSection, RightSection } from './styles';

export interface Installment {
  label: string;
  value: number;
}

export interface PlansProps {
  installmentsList: Installment[];
}

export function Plans({ installmentsList }: PlansProps) {
  const { register, handleSubmit } = useForm();

  return (
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
          {...register('creditCardNumber')}
        />
        <div className="inputWrapper">
          <Input
            name="creditCardExpirationDate"
            label="Validade"
            placeholder="MM/AA"
            {...register('creditCardExpirationDate')}
          />
          <Input
            name="creditCardCVV"
            label="CVV"
            placeholder="000"
            {...register('creditCardCVV')}
          />
        </div>

        <Input
          name="creditCardHolder"
          label="Nome impresso no cartão"
          placeholder="Seu nome"
          {...register('creditCardHolder')}
        />
        <Input
          name="creditCardCPF"
          label="CPF"
          placeholder="000.000.000-00"
          {...register('creditCardCPF')}
        />
        <Input
          name="couponCode"
          label="Cupom"
          placeholder="Insira aqui"
          {...register('couponCode')}
        />
        <Select
          options={installmentsList}
          name="installments"
          label="Número de parcelas"
          placeholder="Selecionar"
          mb="2.5"
        />
        <div>
          <Button name="submitPlans" type="submit">
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
          <RadioCard name="radio1" />
          <RadioCard name="radio2" />
        </div>
        <div className="toolTipWrapper">
          <ToolTip
            id="help-tool-tip"
            label="Sobre a cobrança"
            description="Descrição da cobrança"
          />
        </div>
      </RightSection>
    </Container>
  );
}
