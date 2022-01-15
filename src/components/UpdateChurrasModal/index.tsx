import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { ChurrasForm } from 'components/Forms/ChurrasForm';
import { ParticipantsModal } from 'components/ParticipantsModal';
import { format } from 'date-fns';
import { useUpdateChurras } from 'hooks/useChurras';
import { IChurras } from 'interfaces/churras';
import { IUpdateChurrasFormData } from 'interfaces/forms';
import { churrasFormSchema } from 'shared/validators';

import * as S from './styles';

interface UpdateChurrasModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  churrasInfo: IChurras;
  openParticipantsModal: boolean;
}
export const UpdateChurrasModal = ({
  isOpen,
  onRequestClose,
  churrasInfo,
  openParticipantsModal,
}: UpdateChurrasModalProps) => {
  const [deletedParticipants, setDeletedParticipants] = useState<string[]>([]);
  const { updateChurras } = useUpdateChurras();

  const RHFuseForm = useForm<IUpdateChurrasFormData>({
    resolver: yupResolver(churrasFormSchema),
  });

  useEffect(() => {
    RHFuseForm.reset({
      title: churrasInfo.title,
      description: churrasInfo.description,
      date: format(new Date(churrasInfo.date), 'yyyy-MM-dd'),
      location: churrasInfo.location,
      hour: churrasInfo.hour,
      participants: churrasInfo.participants,
      suggest_value: churrasInfo.suggest_value,
      suggest_drink_value: churrasInfo.suggest_drink_value,
    });
  }, [churrasInfo, isOpen]);

  const handleDeleteParticipants = (id: string) => {
    if (churrasInfo.participants.find((participant) => participant.id === id)) {
      setDeletedParticipants((prev) =>
        prev.includes(id) ? prev : [...prev, id]
      );
    }
  };

  const onSubmit: SubmitHandler<IUpdateChurrasFormData> = async (data) => {
    const newParticipants = data.participants.map((participant) => {
      if (participant.churras_id) {
        return {
          ...participant,
        };
      } else {
        return {
          value: participant.value,
          name: participant.name,
        };
      }
    });
    await updateChurras({
      id: churrasInfo.id,
      title: data.title,
      date: data.date,
      description: data.description,
      hour: data.hour,
      location: data.location,
      participants: newParticipants,
      deleted_participants: deletedParticipants,
      suggest_drink_value: data.suggest_drink_value,
      suggest_value: data.suggest_value,
    });
    onRequestClose();
  };

  const handleCloseParticipantsModal = () => {
    onRequestClose();
  };

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
      shouldVisible={!openParticipantsModal}
    >
      <ParticipantsModal
        isOpen={openParticipantsModal}
        onRequestClose={handleCloseParticipantsModal}
        useForm={RHFuseForm}
        setDeletedParticipants={handleDeleteParticipants}
        onSubmit={onSubmit}
        isEdit
      />
      <S.ScrollView>
        <S.ModalContent>
          <S.ModalHeader>
            <h1>Editar churras</h1>
            <FiX size={30} onClick={onRequestClose} />
          </S.ModalHeader>
          <S.ModalBody onSubmit={RHFuseForm.handleSubmit(onSubmit)}>
            <ChurrasForm
              control={RHFuseForm.control}
              formState={RHFuseForm.formState}
            />
            <Button type="submit" loading={RHFuseForm.formState.isSubmitting}>
              Salvar
            </Button>
          </S.ModalBody>
        </S.ModalContent>
      </S.ScrollView>
    </S.Modal>
  );
};
