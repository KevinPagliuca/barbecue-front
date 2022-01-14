import { ChangeEvent } from 'react';

interface IFormValue {
  id: string;
  name: 'name' | 'email' | 'password' | 'password_confirmation' | 'birthday';
  type: 'text' | 'date' | 'email' | 'password';
  placeholder: string;
  regex?: (event: ChangeEvent<HTMLInputElement>) => string;
  max?: string;
  mask?: string;
}

export const formValues: IFormValue[] = [
  {
    id: 'user-name',
    name: 'name',
    type: 'text',
    placeholder: 'Nome completo',
  },
  {
    id: 'user-email',
    name: 'email',
    type: 'email',
    placeholder: 'E-mail',
  },
  {
    id: 'user-birthday',
    name: 'birthday',
    type: 'date',
    max: '2006-01-01',
    placeholder: 'Data de nascimento',
  },
  {
    id: 'user-password',
    name: 'password',
    type: 'password',
    placeholder: 'Senha',
  },
  {
    id: 'user-password-confirmation',
    name: 'password_confirmation',
    type: 'password',
    placeholder: 'Confirmar senha',
  },
];
