import { format, add } from 'date-fns';

interface IFormValue {
  id: string;
  name: 'title' | 'description' | 'date' | 'hour' | 'location';
  type: 'text' | 'date' | 'time';
  mask?: string;
  min?: string;
  max?: string;
  required?: boolean;
  className?: 'w-50';
  placeholder: string;
}

export const formValues: IFormValue[] = [
  {
    id: 'churras-title',
    name: 'title',
    type: 'text',
    required: true,
    placeholder: 'Título do churras',
  },
  {
    id: 'churras-date',
    name: 'date',
    type: 'date',
    placeholder: 'Data',
    className: 'w-50',
    min: format(
      add(new Date(), {
        days: 1,
      }),
      'yyyy-MM-dd'
    ),
    max: '2030-12-31',
    required: true,
  },
  {
    id: 'churras-time',
    name: 'hour',
    type: 'time',
    className: 'w-50',
    required: true,
    placeholder: 'Hora de início',
  },
  {
    id: 'churras-location',
    name: 'location',
    type: 'text',
    required: true,
    placeholder: 'Local',
  },
  {
    id: 'churras-description',
    name: 'description',
    type: 'text',
    placeholder: 'Descrição',
  },
];
