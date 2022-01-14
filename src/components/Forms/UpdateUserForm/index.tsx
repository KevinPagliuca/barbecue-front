import { Control, Controller, FormState } from 'react-hook-form';

import { TextField } from 'components/TextField';
import { IUserUpdateFormData } from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface UpdateUserFormProps {
  control: Control<IUserUpdateFormData>;
  formState: FormState<IUserUpdateFormData>;
}

export const UpdateUserForm = ({
  control,
  formState: { errors },
}: UpdateUserFormProps) => {
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
