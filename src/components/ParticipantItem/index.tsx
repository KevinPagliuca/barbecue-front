import React from 'react';

import * as S from './styles';

interface ParticipantItemProps {
  name: string;
  value: string;
}
export const ParticipantItem = ({ name, value }: ParticipantItemProps) => {
  return (
    <S.Container>
      <S.Participant>{name}</S.Participant>
      <S.Value>{value}</S.Value>
    </S.Container>
  );
};
