interface IFormValue {
  id: string;
  name: 'name' | 'value';
  type: 'text' | 'number';
  required?: boolean;
  className?: string;
  placeholder: string;
}

export const formValues: IFormValue[] = [];
