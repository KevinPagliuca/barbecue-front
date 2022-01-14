import { Control, Controller, FormState } from 'react-hook-form';

import { TextField } from 'components/TextField';
import { IUserChangePasswordFormData } from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface ChangePasswordFormProps {
  control: Control<IUserChangePasswordFormData>;
  formState: FormState<IUserChangePasswordFormData>;
}

export const ChangePasswordForm = ({
  control,
  formState: { errors },
}: ChangePasswordFormProps) => {
  return (
    <>
      {formValues.map((item) => (
        <Controller
          key={item.id}
          control={control}
          name={item.name}
          render={({ field: { value, onChange } }) => (
            <S.InputContainer>
              <TextField
                id={item.id}
                label={item.placeholder}
                type="password"
                value={value}
                onChange={onChange}
                error={errors[item.name]}
              />
            </S.InputContainer>
          )}
        />
      ))}
    </>
  );
};
