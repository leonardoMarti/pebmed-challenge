import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { api } from '../services/api';

import { Plans as PlansComponent } from '../_pages/plans';
import { Installment, Plan } from '../constants/pages/plan';
import { ROUTES } from '../constants/routes';

interface PlansComponentProps {
  plans: Plan[];
  installmentsList: Installment[];
}

export default function Plans(props: PlansComponentProps) {
  return (
    <>
      <Head>
        <title>Whitebook - Planos</title>
      </Head>
      <PlansComponent {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: plans } = await api.get(ROUTES.OFFER);

  const installmentsList = [
    { label: 'x1', value: 1 },
    { label: 'x12', value: 12 },
  ];

  return {
    props: { plans, installmentsList },
  };
};
