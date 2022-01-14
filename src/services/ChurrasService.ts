import { AxiosError } from 'axios';
import {
  IChurras,
  ICreateChurrasRequestDTO,
  IUpdateChurrasRequestDTO,
} from 'interfaces/churras';

import { client } from './client';

class ChurrasService {
  async getAll() {
    try {
      const { data } = await client.get<IChurras[]>('/churras');
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async getAllByUser() {
    try {
      const { data } = await client.get<IChurras[]>('/churras/user');
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async getById(id: string) {
    try {
      const { data } = await client.get<IChurras>(`/churras/${id}`);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async create(payload: ICreateChurrasRequestDTO) {
    try {
      const { data } = await client.post<IChurras>('/churras', payload);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async update(payload: IUpdateChurrasRequestDTO) {
    try {
      const { data } = await client.put<IChurras>(
        `/churras/${payload.id}`,
        payload
      );
      return data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }

  async delete(id: string) {
    try {
      await client.delete(`/churras/${id}`);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Ocorreu um erro inesperado, tente novamente!');
    }
  }
}

export const churrasService = new ChurrasService();
