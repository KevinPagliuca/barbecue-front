import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { AddChurrasModal } from 'components/AddChurrasModal';

import * as S from './styles';

export const AddChurrasFloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Container onClick={() => setIsOpen(true)}>
        <FiPlus size={40} />
        <S.Text>Adicionar churras</S.Text>
      </S.Container>

      <AddChurrasModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};
