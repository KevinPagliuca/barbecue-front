import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Flip } from 'react-toastify';

import { AppProps } from 'next/app';

import { AuthProvider } from 'contexts/AuthContext';
import { LoaderProvider } from 'contexts/LoaderContext';
import { GlobalStyles } from 'global/styles';
import { queryClient } from 'services/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyles />
        <LoaderProvider>
          <Component {...pageProps} />
          <ToastContainer
            theme="light"
            position="top-center"
            transition={Flip}
          />
          <ReactQueryDevtools />
        </LoaderProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
