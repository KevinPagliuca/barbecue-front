interface IFormValue {
  id: string;
  name: 'name' | 'email' | 'birthday';
  type: 'text' | 'date' | 'email' | 'password';
  placeholder: string;
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
    max: '2001-01-01',
    placeholder: 'Data de nascimento',
  },
];
