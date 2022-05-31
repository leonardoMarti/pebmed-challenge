import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, PreviewProduct } from './styles';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { useRouter } from 'next/router';
import {
  calculateDiscount,
  formatCurrency,
  formatInstallments,
} from '../../utils/currency';
import { Plan } from '../../constants/pages/plan';
import { useUser } from '../../hooks/use-user';

interface FeedbackProps {
  plans: Plan[];
}

interface PlanValues {
  title: string;
  price: string;
}

export function Feedback({ plans }: FeedbackProps) {
  const [plan, setPlan] = useState<PlanValues>();
  const { user } = useUser();

  const router = useRouter();

  const getCurrentPlan = async () => {
    const offerId = router.query.offerId;
    const currentPlan = plans?.find((plan) => plan.id === Number(offerId));
    if (currentPlan) {
      const title = `${currentPlan?.title} | ${currentPlan?.description}`;
      const discountedPrice = calculateDiscount(
        currentPlan?.fullPrice,
        currentPlan?.discountPercentage
      );
      const installmentAmount = formatInstallments(
        discountedPrice,
        currentPlan?.installments
      );
      const price = `${formatCurrency(discountedPrice)} | ${installmentAmount}`;
      setPlan({ title, price });
    }
  };

  useEffect(() => {
    getCurrentPlan();
  }, []);

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
            <span className="plan">{plan?.title}</span>
            <span className="price">{plan?.price}</span>
          </div>
        </div>
        <div className="fieldWrapper">
          <div className="field">
            <span className="label">E-mail</span>
            <span className="value">fulano@cicrano.com.br</span>
          </div>
          <div className="field">
            <span className="label">CPF</span>
            <span className="value">
              {user?.creditCardCPF || '000.000.000-00'}
            </span>
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
