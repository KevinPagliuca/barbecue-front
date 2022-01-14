import React, { createContext, useContext, useEffect, useState } from 'react';

import router from 'next/router';

import { Loader } from 'components/Loader';

interface ILoaderContextData {
  customLoaderState: boolean;
}

export const LoaderContext = createContext({} as ILoaderContextData);

export const LoaderProvider: React.FC = ({ children }) => {
  const [customLoaderState, setCustomLoaderState] = useState(false);

  const handleStart = () => {
    setCustomLoaderState(true);
  };

  const handleStop = () => {
    setCustomLoaderState(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);

  return (
    <LoaderContext.Provider value={{ customLoaderState }}>
      <Loader open={customLoaderState} />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
