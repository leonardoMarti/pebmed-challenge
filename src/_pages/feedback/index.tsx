import React from 'react';
import Image from 'next/image';
import { Container, PreviewProduct } from './styles';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { useSubscription } from '../../hooks/use-subscription';

export function FeedBack() {
  const { subscription } = useSubscription();

  return (
    <Container>
      <div className="successWrapper">
        <Image
          src="/images/sucess.svg"
          width="60px"
          height="60px"
          alt="Sucess"
        />
      </div>

      <Title label="Parabéns!" color={COLORS.BLUE900} mb={0.6875} />
      <span className="subTitle">
        Sua assinatura foi realizada com sucesso.
      </span>

      <PreviewProduct>
        <div className="card">
          <Image src="/images/star.svg" width="40px" height="40px" alt="Star" />

          <div className="priceWrapper">
            <span className="plan">Anual | Parcelado</span>
            <span className="price">R$ 479,90 | 10x R$ 47,99</span>
          </div>
        </div>
        <div className="fieldWrapper">
          <div className="field">
            <span className="label">E-mail</span>
            <span className="value">fulano@cicrano.com.br</span>
          </div>
          <div className="field">
            <span className="label">CPF</span>
            <span className="value">000.000.000-00</span>
          </div>
        </div>
      </PreviewProduct>

      <div className="buttonWrapper">
        <span className="subscription">Gerenciar assinatura</span>
        <Button name="goHome" type="button">
          <span className="buttonLabel">IR PARA A HOME</span>
        </Button>
      </div>
    </Container>
  );
}
