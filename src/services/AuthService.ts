import { AxiosError } from 'axios';
import {
  IUser,
  IUserChangePasswordRequestDTO,
  IUserSignInRequestDTO,
  IUserSignInResponseDTO,
  IUserSignUpRequestDTO,
  IUserSignUpResponseDTO,
  IUserUpdateRequestDTO,
} from 'interfaces/auth';

import { client, setAuthentication } from './client';

class AuthService {
  async getMe(token: string) {
    try {
      const { data } = await client.get<IUser>('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuthentication(token, data);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async signIn(payload: IUserSignInRequestDTO) {
    try {
      const { data } = await client.post<IUserSignInResponseDTO>(
        '/auth',
        payload
      );
      setAuthentication(data.token, data.user);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async signUp(payload: IUserSignUpRequestDTO) {
    try {
      const { data } = await client.post<IUserSignUpResponseDTO>(
        '/auth/register',
        payload
      );
      setAuthentication(data.token, data.user);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async update(payload: IUserUpdateRequestDTO, token: string) {
    try {
      const { data } = await client.put<IUser>('/auth/me', payload);
      setAuthentication(token, data);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async changePassword(payload: IUserChangePasswordRequestDTO) {
    try {
      await client.put('/auth/me/password', payload);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async deleteAccount() {
    try {
      await client.delete('/auth/me');
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }
}

export const authService = new AuthService();
