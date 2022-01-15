import React, { useEffect } from 'react';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  UseFormReturn,
  useForm as useFormHelper,
} from 'react-hook-form';
import { FiPlusCircle, FiTrash2, FiX } from 'react-icons/fi';

import { Button, ButtonVariants } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { TextField } from 'components/TextField';
import { theme } from 'global/theme';
import {
  ICreateChurrasFormData,
  IUpdateChurrasFormData,
} from 'interfaces/forms';

import * as S from './styles';

type IChurrasFormType = ICreateChurrasFormData | IUpdateChurrasFormData;

interface ParticipantsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: SubmitHandler<IChurrasFormType>;
  useForm: UseFormReturn<IChurrasFormType>;
  isEdit?: boolean;
  setDeletedParticipants?: (participants: string) => void;
}

type HandleSelectRadioProps = {
  index: number;
  onChange: (value: string) => void;
  value: string;
};

export const ParticipantsModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  useForm,
  isEdit = false,
  setDeletedParticipants,
}: ParticipantsModalProps) => {
  const formHelper = useFormHelper();
  const {
    control,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    handleSubmit,
    trigger,
  } = useForm;

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

  const handleSelectRadio = ({
    index,
    onChange,
    value,
  }: HandleSelectRadioProps) => {
    if (value === 'min') {
      setValue(`participants.${index}.value`, watch('suggest_value'));
      trigger(`participants.${index}.value`);
    }
    if (value === 'suggest_drink') {
      setValue(`participants.${index}.value`, watch('suggest_drink_value'));
      trigger(`participants.${index}.value`);
    }
    onChange(value);
  };

  useEffect(() => {
    if (!isEdit) {
      if (isOpen) {
        if (fields.length === 0) {
          append({
            name: '',
            value: '',
          });
        }
      } else {
        fields.map((_, index) => {
          remove(index);
        });
      }
      formHelper.reset();
    }
  }, [isOpen]);

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
    >
      <S.ScrollView>
        <S.ModalContent>
          <S.ModalHeader>
            <h1>Adicionar{isEdit && '/Editar '} participantes</h1>
            <FiX size={30} onClick={onRequestClose} />
          </S.ModalHeader>

          <S.ModalBody onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <S.InputGroupContainer key={field.id}>
                {isEdit && (
                  <Controller
                    control={control}
                    name={`participants.${index}.id`}
                    render={({ field: { value } }) => (
                      <input value={value} hidden />
                    )}
                  />
                )}
                <S.InputContainer
                  className={
                    errors.participants && errors?.participants[index]?.name
                      ? 'errored'
                      : undefined
                  }
                >
                  <Controller
                    control={control}
                    name={`participants.${index}.name`}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        id={`participant.${index}.name`}
                        label="Nome"
                        value={value}
                        onChange={onChange}
                        error={
                          errors.participants &&
                          errors?.participants[index]?.name
                        }
                      />
                    )}
                  />
                </S.InputContainer>
                <Controller
                  control={control}
                  name={`participants.${index}.value`}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      id={`participant.${index}.value`}
                      label="Valor em R$"
                      type="number"
                      value={value}
                      readOnly={formHelper.watch(`value_helper.${index}`)}
                      onChange={(e) =>
                        onChange(e.target.value.replace(/\D/g, ''))
                      }
                      error={
                        errors.participants &&
                        errors?.participants[index]?.value
                      }
                    />
                  )}
                />

                <S.FillValueButtonsContainer>
                  <Controller
                    control={formHelper.control}
                    name={`value_helper.${index}`}
                    render={({ field: { value, onChange } }) => (
                      <React.Fragment>
                        <Checkbox
                          id={`FillMinValue.${field.id}`}
                          label="Preencher com o valor mínimo"
                          checked={value === 'min'}
                          onSelect={() =>
                            handleSelectRadio({
                              index,
                              value: value === 'min' ? '' : 'min',
                              onChange,
                            })
                          }
                        />
                        <Checkbox
                          id={`FillWithDrinkValue.${field.id}`}
                          label="Preencher com valor + bebida"
                          checked={value === 'suggest_drink'}
                          onSelect={() =>
                            handleSelectRadio({
                              index,
                              value:
                                value === 'suggest_drink'
                                  ? ''
                                  : 'suggest_drink',
                              onChange,
                            })
                          }
                        />
                      </React.Fragment>
                    )}
                  />
                </S.FillValueButtonsContainer>

                <S.RemoveItemButton
                  onClick={() => handleDeleteParticipant(index, field.id)}
                >
                  <FiTrash2 color={theme.colors.red} size={20} />
                  Excluir participante
                </S.RemoveItemButton>
              </S.InputGroupContainer>
            ))}
            <S.AddParticipantsText
              onClick={() => append({ name: '', value: '' })}
              className={fields.length === 0 ? 'center' : undefined}
            >
              <FiPlusCircle size={20} />
              Adicionar participante
            </S.AddParticipantsText>
            <Button type="submit" loading={isSubmitting}>
              {!isEdit ? 'Cadastrar' : 'Salvar'}
            </Button>
            <Button
              type="button"
              disabled={isSubmitting}
              variant={ButtonVariants.RED}
              onClick={onRequestClose}
            >
              Cancelar
            </Button>
          </S.ModalBody>
        </S.ModalContent>
      </S.ScrollView>
    </S.Modal>
  );
};
