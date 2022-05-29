import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header';
import { ToastSnackBar } from '../components/ToastifySnackBar';
import { SubscriptioContextProvider } from '../context/subscription';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SubscriptioContextProvider>
        <GlobalStyle />
        <ToastSnackBar />
        <Header />
        <Component {...pageProps} />
      </SubscriptioContextProvider>
    </>
  );
}

export default MyApp;
