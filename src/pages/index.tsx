import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Installment, Plans as PlansComponent } from '../_pages/plans';

interface PlansComponentProps {
  props: { installmentsList: Installment[] };
}

export default function Plans({ props }: PlansComponentProps) {
  const installmentsList = [
    { label: 'x1', value: 1 },
    { label: 'x2', value: 2 },
    { label: 'x4', value: 4 },
    { label: 'x6', value: 6 },
    { label: 'x12', value: 12 },
  ];

  return (
    <>
      <Head>
        <title>Whitebook - Planos</title>
      </Head>
      <PlansComponent installmentsList={installmentsList} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
