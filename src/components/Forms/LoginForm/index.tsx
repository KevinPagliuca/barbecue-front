import { Control, Controller, FormState } from 'react-hook-form';

import { TextField } from 'components/TextField';
import { IUserSignInFormData } from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface LoginFormProps {
  control: Control<IUserSignInFormData>;
  formState: FormState<IUserSignInFormData>;
}

export const LoginForm = ({
  control,
  formState: { errors },
}: LoginFormProps) => {
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
                type={item.type}
                label={item.placeholder}
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
