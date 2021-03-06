import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Link from 'next/link';

import { useAuth } from 'contexts/AuthContext';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { theme } from 'global/theme';
import { formatToBRL } from 'helpers/formatToBRL';
import { IChurras } from 'interfaces/churras';

import * as S from './styles';

interface ChurrasCardProps {
  churrasInfo: IChurras;
}

export const ChurrasCard = ({ churrasInfo }: ChurrasCardProps) => {
  const { user } = useAuth();
  const shortDescription =
    churrasInfo.description.length > 50
      ? churrasInfo.description.slice(0, 50) + '...'
      : churrasInfo.description;

  const valueTotalRaised = churrasInfo.participants.reduce(
    (acc, curr) => acc + Number(curr.value),
    0
  );

  return (
    <S.Container>
      <Link href={`/churras-detail/${churrasInfo.id}`} passHref>
        <S.ContentContainer>
          <S.ChurrasDate>
            {format(new Date(churrasInfo.date), "dd ' de ' MMMM 'de ' yyyy", {
              locale: ptBR,
            })}
          </S.ChurrasDate>
          <S.ChurrasIntent>{churrasInfo.title}</S.ChurrasIntent>
          <S.ChurrasDescription>
            <strong>Descrição curta: </strong>
            <p>{shortDescription}</p>
          </S.ChurrasDescription>
          <S.ChurrasValueAndParticipants>
            <span>
              <FiUsers color={theme.colors.primary} />
              {churrasInfo.participants.length}
            </span>
            <span>
              <RiMoneyDollarCircleFill color={theme.colors.primary} />
              {formatToBRL(valueTotalRaised)}
            </span>
          </S.ChurrasValueAndParticipants>

          {churrasInfo.user && (
            <S.CurrasHost>
              <strong>Anfitrião:</strong>
              <span>
                {churrasInfo?.user_id === user?.id
                  ? 'Eu'
                  : churrasInfo.user.name}
              </span>
            </S.CurrasHost>
          )}
        </S.ContentContainer>
      </Link>

      {/* {user?.id !== churrasInfo.user_id && (
        <S.ParticipButtton>
          <span>Pedir para participar</span>
        </S.ParticipButtton>
      )} */}
    </S.Container>
  );
};

interface ChurrasCardSkeletonProps {
  render: number;
}

export const ChurrasCardSkeleton = ({ render }: ChurrasCardSkeletonProps) => {
  const array = Array(render).fill(0);

  return (
    <>
      {array.map((_, index) => (
        <S.Container key={index}>
          <S.ContentContainer>
            <S.ChurrasDate>
              <Skeleton />
            </S.ChurrasDate>

            <S.ChurrasIntent>
              <Skeleton width={100} />
            </S.ChurrasIntent>

            <S.ChurrasDescription>
              <strong>
                <Skeleton width={150} />
              </strong>
              <p>
                <Skeleton count={2} />
              </p>
            </S.ChurrasDescription>

            <S.ChurrasValueAndParticipants>
              <span>
                <Skeleton
                  circle
                  width={20}
                  height={20}
                  style={{
                    marginRight: '4px',
                  }}
                />
                <Skeleton width={50} />
              </span>
              <span>
                <Skeleton
                  circle
                  width={20}
                  height={20}
                  style={{
                    marginRight: '4px',
                  }}
                />
                <Skeleton width={100} />
              </span>
            </S.ChurrasValueAndParticipants>
          </S.ContentContainer>
        </S.Container>
      ))}
    </>
  );
};
