import React from 'react';
import {
  RiDashboardLine,
  RiLogoutCircleRLine,
  RiUserSettingsLine,
} from 'react-icons/ri';

import { useRouter } from 'next/router';

import { ActiveLink } from 'components/ActiveLink';
import { useAuth } from 'contexts/AuthContext';

import * as S from './styles';

interface HeaderProps {
  title: string;
  headerHeight?: 'small' | 'normal';
}

export const Header = ({ title, headerHeight }: HeaderProps) => {
  const { isAuthenticated, handleSignOut } = useAuth();
  const { asPath } = useRouter();
  const noAuthPages = ['/', '/register'];
  return (
    <S.Container headerHeight={headerHeight}>
      {isAuthenticated && !noAuthPages.includes(asPath) && (
        <S.NavContainer>
          <S.NavContent>
            <ActiveLink href="/dashboard" activeClassName="active-link">
              <a>
                <RiDashboardLine size={20} />
                Dashboard
              </a>
            </ActiveLink>

            <ActiveLink href="/profile" activeClassName="active-link">
              <a>
                <RiUserSettingsLine size={20} /> Meu perfil
              </a>
            </ActiveLink>

            <a className="logoutBtn" onClick={handleSignOut}>
              <RiLogoutCircleRLine size={20} />
              Sair
            </a>
          </S.NavContent>
        </S.NavContainer>
      )}
      <S.ContentContainer>
        <h1>{title}</h1>
      </S.ContentContainer>
      <S.LinearGradient />
    </S.Container>
  );
};
