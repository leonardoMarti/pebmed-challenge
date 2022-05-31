import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header';
import { ToastSnackBar } from '../components/ToastifySnackBar';
import { UserContextProvider } from '../context/user';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextProvider>
        <GlobalStyle />
        <ToastSnackBar />
        <Header />
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}

export default MyApp;
