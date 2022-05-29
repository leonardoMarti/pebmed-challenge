import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header';
import { ToastSnackBar } from '../components/ToastifySnackBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastSnackBar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
