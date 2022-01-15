interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onSelect: () => void;
}

import { FiCheck } from 'react-icons/fi';

import * as S from './styles';
export const Checkbox = ({ id, label, checked, onSelect }: CheckboxProps) => {
  return (
    <S.Container>
      <S.Checkmark id={id} checked={checked} onClick={onSelect}>
        <FiCheck className={checked ? 'show' : undefined} />
      </S.Checkmark>
      {!!label && <S.Label onClick={onSelect}>{label}</S.Label>}
    </S.Container>
  );
};
