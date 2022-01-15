import { Control, Controller, FormState, useFieldArray } from 'react-hook-form';
import { FiTrash2 } from 'react-icons/fi';

import { Textarea } from 'components/Textarea';
import { TextField } from 'components/TextField';
import { theme } from 'global/theme';
import {
  ICreateChurrasFormData,
  IUpdateChurrasFormData,
} from 'interfaces/forms';

import { formValues } from './formValues';
import * as S from './styles';

interface ChurrasFormProps {
  control: Control<ICreateChurrasFormData | IUpdateChurrasFormData>;
  formState: FormState<ICreateChurrasFormData | IUpdateChurrasFormData>;
  isEdit?: boolean;
  setDeletedParticipants?: (participants: string) => void;
}

export const ChurrasForm = ({
  control,
  formState: { errors },
  setDeletedParticipants,
  isEdit,
}: ChurrasFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'participants',
  });

  const handleDeleteParticipant = (
    fieldIndex: number,
    participantId: string
  ) => {
    remove(fieldIndex);
    if (setDeletedParticipants && isEdit) {
      setDeletedParticipants(participantId);
    }
  };

  return (
    <>
      <S.MainContainer>
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
                    required={item.required}
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
      </S.MainContainer>
      {/* {fields.length > 0 && <S.SectionTitle>Participantes</S.SectionTitle>}
      {fields.map((field, index) => (
        <S.InputGroupContainer key={field.id}>
          {isEdit && (
            <Controller
              control={control}
              name={`participants.${index}.id`}
              render={({ field: { value } }) => <input value={value} hidden />}
            />
          )}
          <Controller
            control={control}
            name={`participants.${index}.name`}
            render={({ field: { value, onChange } }) => (
              <TextField
                id={`participant.${index}.name`}
                label="Nome"
                value={value}
                onChange={onChange}
                error={errors.participants && errors?.participants[index]?.name}
              />
            )}
          />
          <Controller
            control={control}
            name={`participants.${index}.value`}
            render={({ field: { value, onChange } }) => (
              <TextField
                id={`participant.${index}.value`}
                label="Valor em R$"
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
                error={
                  errors.participants && errors?.participants[index]?.value
                }
              />
            )}
          />

          <S.RemoveItemButton
            onClick={() => handleDeleteParticipant(index, field.id)}
          >
            <FiTrash2 color={theme.colors.red} size={20} />
            Excluir participante
          </S.RemoveItemButton>
        </S.InputGroupContainer>
      ))}
      <S.AddParticipantsText onClick={() => append({ name: '', value: '' })}>
        Adicionar Participantes
      </S.AddParticipantsText> */}
    </>
  );
};
