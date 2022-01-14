import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import router from 'next/router';

import { ConfirmationModal } from 'components/ConfirmationModal';
import { ParticipantItem } from 'components/ParticipantItem';
import { useAuth } from 'contexts/AuthContext';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { theme } from 'global/theme';
import { formatToBRL } from 'helpers/formatToBRL';
import { useDeleteChurras } from 'hooks/useChurras';
import { IChurras } from 'interfaces/churras';

import * as S from './styles';

interface ChurrasDetailBoxProps {
  churras: IChurras;
}

export const ChurrasDetailBox = ({ churras }: ChurrasDetailBoxProps) => {
  const { user } = useAuth();
  const { deleteChurras } = useDeleteChurras();
  const valueTotalRaised = churras.participants.reduce(
    (acc, participant) => acc + Number(participant.value),
    0
  );

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleConfirmDelete = async () => {
    await deleteChurras(churras.id);
    router.push('/');
  };

  return (
    <S.Container>
      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onRequestClose={() => setConfirmationModalOpen(false)}
        message="Tem certeza que deseja excluir deste churras?"
        title="Excluir churras"
        onConfirm={() => handleConfirmDelete()}
      />
      <S.ContentContainer>
        <S.HeaderContainer>
          <div>
            <S.Title>{churras.title}</S.Title>
            <S.Description>{churras.description}</S.Description>
          </div>
          <div className="valueAndParticipants">
            <span>
              <FiUsers color={theme.colors.primary} size={24} />
              {churras.participants.length} participantes
            </span>
            <span>
              <RiMoneyDollarCircleFill color={theme.colors.primary} size={28} />
              {formatToBRL(valueTotalRaised)}
            </span>
          </div>
        </S.HeaderContainer>

        <S.DateAndLocationContainer>
          <S.DateAndHour>
            {format(new Date(churras.date), "dd ' de ' MMMM 'de ' yyyy", {
              locale: ptBR,
            })}
            , às {churras.hour}
          </S.DateAndHour>
          <S.Location>{churras.location}</S.Location>
        </S.DateAndLocationContainer>

        <S.ParticipantsContainer>
          {churras.participants.map((participant) => (
            <div key={participant.id}>
              <ParticipantItem
                name={participant.name}
                value={formatToBRL(Number(participant.value))}
              />
            </div>
          ))}
        </S.ParticipantsContainer>
        {user.id === churras.user_id && (
          <S.DeleteChurrasButton onClick={() => setConfirmationModalOpen(true)}>
            Excluir Churras
          </S.DeleteChurrasButton>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};
