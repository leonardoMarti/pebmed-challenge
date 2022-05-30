import React from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import { CreditCards } from '../../components/CreditCards';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { RadioCard } from '../../components/RadioCard';
import { ToolTip } from '../../components/ToolTip';
import { SnackBar } from '../../components/SnackBar';
import { MaskedInput } from '../../components/MaskedInput';

import { Installment, Plan } from '../../constants/pages/plan';
import { api } from '../../services/api';
import { ROUTES } from '../../constants/routes';
import { useUser } from '../../hooks/use-user';

import { removeSpecificScore } from '../../utils/string';

import { Container, LeftSection, RightSection } from './styles';

export interface PlansProps {
  installmentsList: Installment[];
  plans: Plan[];
}

export function Plans({ installmentsList, plans }: PlansProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (values) => {
    const resquestData = {
      ...values,
      creditCardCPF: removeSpecificScore(values.creditCardCPF, ['.', '-']),
      creditCardNumber: removeSpecificScore(values.creditCardNumber, [' ']),
      couponCode: Number(values.couponCode),
      installments: Number(values.installments),
      offerId: Number(values.offerId),
      gateway: 'iugu',
      userId: 1,
    };

    console.log('🚀  resquestData', resquestData);

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
            <CreditCards id="credit-cards-id" />
          </div>

          <Controller
            name="creditCardNumber"
            control={control}
            rules={{ required: 'Campo obrigatório', minLength: 19 }}
            render={({ field: { onChange } }) => (
              <MaskedInput
                id="credit-card-number"
                label="Número do cartão"
                placeholder="0000 0000 0000 0000"
                error={errors ? errors?.creditCardNumber : undefined}
                maxLength={19}
                minLength={16}
                onChange={onChange}
                options={{ blocks: [4, 4, 4, 4], uppercase: true }}
              />
            )}
          />

          <div className="inputWrapper">
            <Controller
              name="creditCardExpirationDate"
              control={control}
              rules={{ required: 'Campo obrigatório', minLength: 5 }}
              render={({ field: { onChange } }) => (
                <MaskedInput
                  id="credit-card-expiration-date"
                  label="Validade"
                  placeholder="MM/AA"
                  error={errors ? errors?.creditCardExpirationDate : undefined}
                  maxLength={5}
                  minLength={4}
                  onChange={onChange}
                  options={{ date: true, datePattern: ['m', 'y'] }}
                />
              )}
            />
            <Input
              id="credit-card-cvv"
              label="CVV"
              placeholder="000"
              maxLength={3}
              minLength={3}
              error={errors?.creditCardCVV}
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
            error={errors?.creditCardHolder}
            register={register('creditCardHolder', {
              required: 'Campo obrigatório',
              minLength: 3,
            })}
          />

          <Controller
            name="creditCardCPF"
            control={control}
            rules={{ required: 'Campo obrigatório', minLength: 14 }}
            render={({ field: { onChange } }) => (
              <MaskedInput
                id="credit-card-cpf"
                label="CPF"
                placeholder="000.000.000-00"
                error={errors ? errors?.creditCardCPF : undefined}
                maxLength={14}
                minLength={11}
                onChange={onChange}
                options={{
                  delimiters: ['.', '.', '-'],
                  blocks: [3, 3, 3, 2],
                  uppercase: true,
                }}
              />
            )}
          />
          <Input
            id="coupon-code"
            label="Cupom"
            placeholder="Insira aqui"
            maxLength={6}
            error={errors?.couponCode}
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
                id={`plan-radio-${plan?.id}`}
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
