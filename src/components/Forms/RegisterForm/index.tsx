import { Control, Controller, FormState } from 'react-hook-form';

import { TextField } from 'components/TextField';
import { IUserSignUpFormData } from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface RegisterFormProps {
  control: Control<IUserSignUpFormData>;
  formState: FormState<IUserSignUpFormData>;
}

export const RegisterForm = ({
  control,
  formState: { errors },
}: RegisterFormProps) => {
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
                type={item.type}
                value={value}
                onChange={onChange}
                max={item?.max}
                error={errors[item.name]}
                mask={item?.mask}
              />
            </S.InputContainer>
          )}
        />
      ))}
    </>
  );
};
