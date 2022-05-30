import React from 'react';
import Head from 'next/head';

import { Feedback as FeedBackComponent } from '../_pages/feedback';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { ROUTES } from '../constants/routes';
import { Plan } from '../constants/pages/plan';

interface FeedbackComponentProps {
  plans: Plan[];
}

export default function Feedback(props: FeedbackComponentProps) {
  return (
    <>
      <Head>
        <title>Whitebook - Parabéns!</title>
      </Head>
      <FeedBackComponent {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: plans } = await api.get(ROUTES.OFFER);

  return {
    props: { plans },
  };
};
