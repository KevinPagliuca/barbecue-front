import { format, add } from 'date-fns';

interface IFormValue {
  id: string;
  name:
    | 'title'
    | 'description'
    | 'date'
    | 'hour'
    | 'location'
    | 'suggest_drink_value'
    | 'suggest_value';
  type: 'text' | 'date' | 'time' | 'number';
  min?: string;
  max?: string;
  className?: string;
  placeholder: string;
}

export const formValues: IFormValue[] = [
  {
    id: 'churras-title',
    name: 'title',
    type: 'text',
    placeholder: 'Título do churras',
  },
  {
    id: 'churras-date',
    name: 'date',
    type: 'date',
    placeholder: 'Data',
    className: 'group-2 right',
    min: format(
      add(new Date(), {
        days: 1,
      }),
      'yyyy-MM-dd'
    ),
    max: '2030-12-31',
  },
  {
    id: 'churras-time',
    name: 'hour',
    type: 'time',
    className: 'group-1 left',

    placeholder: 'Hora de início',
  },
  {
    id: 'churras-suggest-value',
    name: 'suggest_value',
    type: 'number',
    placeholder: 'Valor sugerido',
    className: 'group-2 right',
  },
  {
    id: 'churras-suggest-value-drink',
    name: 'suggest_drink_value',
    type: 'number',
    placeholder: 'Valor sug. com bebida',
    className: 'group-2 left',
  },
  {
    id: 'churras-location',
    name: 'location',
    type: 'text',

    placeholder: 'Local',
  },
  {
    id: 'churras-description',
    name: 'description',
    type: 'text',
    placeholder: 'Descrição',
  },
];
