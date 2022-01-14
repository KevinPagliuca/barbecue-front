import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import router from 'next/router';

import { theme } from 'global/theme';
import {
  IAuthContextData,
  IUser,
  IUserSignUpRequestDTO,
  IUserUpdateRequestDTO,
} from 'interfaces/auth';
import { parseCookies } from 'nookies';
import { authService } from 'services/AuthService';
import { removeAuthentication } from 'services/client';
import { ThemeProvider } from 'styled-components';

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@barbecue:token': token, '@barbecue:userdata_cache': userData } =
      parseCookies();

    if (token && userData) {
      setUser(JSON.parse(userData));
      authService
        .getMe(token)
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          setUser(undefined);
          removeAuthentication();
          router.push('/');
        });
    } else {
      removeAuthentication();
      setUser(undefined);
    }
  }, []);

  const handleSignIn = useCallback(async (payload: IUserSignUpRequestDTO) => {
    try {
      const { user } = await authService.signIn(payload);
      setUser(user);
      toast.success('Autenticado com sucesso!');
      router.push('/my-churras');
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleSignUp = useCallback(async (payload: IUserSignUpRequestDTO) => {
    try {
      const { user } = await authService.signUp(payload);
      setUser(user);
      toast.success('Cadastrado com sucesso!');
      toast.success('Autenticado com sucesso!');
      router.push('/my-churras');
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    setUser(undefined);
    removeAuthentication();
    router.push('/');
    toast.success('Desconectado com sucesso, até a próxima!');
  }, [user]);

  const handleUpdateUser = useCallback(
    async (payload: IUserUpdateRequestDTO) => {
      const { '@barbecue:token': token } = parseCookies();
      try {
        const data = await authService.update(payload, token);
        setUser(data);
        toast.success('Atualizado com sucesso!');
      } catch (error) {
        toast.error(error.message);
      }
    },
    []
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleUpdateUser,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
