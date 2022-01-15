import { Control, Controller, FormState } from 'react-hook-form';

import { Textarea } from 'components/Textarea';
import { TextField } from 'components/TextField';
import {
  ICreateChurrasFormData,
  IUpdateChurrasFormData,
} from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface ChurrasFormProps {
  control: Control<ICreateChurrasFormData | IUpdateChurrasFormData>;
  formState: FormState<ICreateChurrasFormData | IUpdateChurrasFormData>;
}

export const ChurrasForm = ({
  control,
  formState: { errors },
}: ChurrasFormProps) => {
  return (
    <S.Container>
      {formValues.map((item) => (
        <Controller
          key={item.id}
          control={control}
          name={item.name}
          render={({ field: { value, onChange } }) => (
            <S.InputContainer className={item?.className}>
              {item.name !== 'description' ? (
                <TextField
                  id={item.id}
                  label={item.placeholder}
                  type={item.type}
                  min={item.type === 'date' ? item.min : undefined}
                  max={item.type === 'date' ? item.max : undefined}
                  value={value}
                  onChange={onChange}
                  error={errors[item.name]}
                />
              ) : (
                <Textarea
                  id={item.id}
                  label={item.placeholder}
                  value={value}
                  onChange={onChange}
                  error={errors[item.name]}
                />
              )}
            </S.InputContainer>
          )}
        />
      ))}
    </S.Container>
  );
};
