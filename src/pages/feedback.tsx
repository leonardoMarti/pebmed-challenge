import React from 'react';
import Head from 'next/head';

import { FeedBack as FeedBackComponent } from '../_pages/feedback';

export default function FeedBack() {
  return (
    <>
      <Head>
        <title>Whitebook - Parabéns!</title>
      </Head>
      <FeedBackComponent />
    </>
  );
}
