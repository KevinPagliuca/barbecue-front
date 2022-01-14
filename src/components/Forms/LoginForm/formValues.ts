interface IFormValue {
  id: string;
  name: 'email' | 'password';
  type: 'email' | 'password';
  placeholder: string;
}

export const formValues: IFormValue[] = [
  {
    id: 'user-email',
    name: 'email',
    type: 'email',
    placeholder: 'E-mail',
  },
  {
    id: 'user-password',
    name: 'password',
    type: 'password',
    placeholder: 'Senha',
  },
];
