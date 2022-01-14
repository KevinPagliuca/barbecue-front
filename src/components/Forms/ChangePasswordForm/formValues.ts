interface IFormValue {
  id: string;
  name: 'password' | 'password_confirmation';
  placeholder: string;
}

export const formValues: IFormValue[] = [
  {
    id: 'user-password',
    name: 'password',
    placeholder: 'Senha',
  },
  {
    id: 'user-password-confirmation',
    name: 'password_confirmation',
    placeholder: 'Confirmar senha',
  },
];
