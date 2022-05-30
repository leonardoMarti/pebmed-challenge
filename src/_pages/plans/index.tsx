import React from 'react';
import { useForm } from 'react-hook-form';

import { CreditCards } from '../../components/CreditCards';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { RadioCard } from '../../components/RadioCard';
import { ToolTip } from '../../components/ToolTip';
import { SnackBar } from '../../components/SnackBar';

import { useSubscription } from '../../hooks/use-subscription';

import { Container, LeftSection, RightSection } from './styles';
import { Installment, Plan } from '../../constants/pages/plan';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { ROUTES } from '../../constants/routes';

export interface PlansProps {
  installmentsList: Installment[];
  plans: Plan[];
}

export function Plans({ installmentsList, plans }: PlansProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (values) => {
    const resquestData = {
      ...values,
      couponCode: Number(values.couponCode),
      installments: Number(values.installments),
      offerId: Number(values.offerId),
      gateway: 'iugu',
      userId: 1,
    };

    const currentPlan = plans.find(
      (plan) => plan.id === Number(values.offerId)
    );

    try {
      await api.post(ROUTES.SUBSCRIPTION, { ...resquestData });

      SnackBar.SUCCESS('Compra realizada com sucesso!');
      router.push({
        pathname: '/feedback',
        query: { offerId: currentPlan.id },
      });
    } catch (error) {
      SnackBar.ERROR('Tivemos uma problema para concluir sua compra!');
    }
  };

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <LeftSection>
          <div className="titleWrapper">
            <Title label="Estamos quase lá!" mb={0.625} />
            <h2 className="subTitle">Insira seus dados de pagamento abaixo:</h2>
          </div>
          <div className="creditCardWrapper">
            <CreditCards />
          </div>

          <Input
            id="credit-card-number"
            label="Número do cartão"
            placeholder="0000 0000 0000 0000"
            error={errors.creditCardNumber}
            maxLength={16}
            minLength={16}
            register={register('creditCardNumber', {
              required: 'Campo obrigatório',
              minLength: 16,
            })}
          />
          <div className="inputWrapper">
            <Input
              id="credit-card-expiration-date"
              label="Validade"
              placeholder="MM/AA"
              maxLength={4}
              minLength={4}
              error={errors.creditCardExpirationDate}
              register={register('creditCardExpirationDate', {
                required: 'Campo obrigatório',
                minLength: 4,
              })}
            />
            <Input
              id="credit-card-cvv"
              label="CVV"
              placeholder="000"
              maxLength={3}
              minLength={3}
              error={errors.creditCardCVV}
              register={register('creditCardCVV', {
                required: 'Campo obrigatório',
                minLength: 3,
              })}
            />
          </div>
          <Input
            id="creditCardHolder"
            label="Nome impresso no cartão"
            placeholder="Seu nome"
            maxLength={100}
            minLength={3}
            error={errors.creditCardHolder}
            register={register('creditCardHolder', {
              required: 'Campo obrigatório',
              minLength: 3,
            })}
          />
          <Input
            id="credit-card-cpf"
            label="CPF"
            placeholder="000.000.000-00"
            maxLength={11}
            minLength={11}
            error={errors.creditCardCPF}
            register={register('creditCardCPF', {
              required: 'Campo obrigatório',
              minLength: 11,
            })}
          />
          <Input
            id="coupon-code"
            label="Cupom"
            placeholder="Insira aqui"
            maxLength={6}
            error={errors.couponCode}
            register={register('couponCode')}
          />
          <Select
            options={installmentsList}
            name="installments"
            label="Número de parcelas"
            placeholder="Selecionar"
            mb="2.5"
            register={register('installments', {
              required: 'Campo obrigatório',
            })}
          />
          <div className="buttonWrapper">
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
            {plans?.map((plan) => (
              <RadioCard
                key={plan?.id}
                name="radio"
                discount={plan.discountPercentage}
                price={plan.fullPrice}
                title={`${plan.title} | ${plan.description}`}
                installments={plan.installments}
                value={plan.id}
                register={register('offerId')}
                checked={plan.order === 1}
              />
            ))}
          </div>
          <div className="toolTipWrapper">
            <ToolTip
              id="help-tool-tip"
              label="Sobre a cobrança"
              description="Descrição da cobrança"
            />
          </div>
          <div className="buttonWrapper">
            <Button name="submitPlans" type="submit">
              <span className="buttonLabel">Finalizar pagamento</span>
            </Button>
          </div>
        </RightSection>
      </form>
    </Container>
  );
}
