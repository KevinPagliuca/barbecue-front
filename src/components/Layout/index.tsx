import React from 'react';

import Head from 'next/head';

import { Header } from 'components/Header';

import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  title: string;
  headerHeight?: 'small' | 'normal';
  wrapperBackground?: string;
}

export const Layout = ({
  children,
  pageTitle,
  title,
  headerHeight = 'normal',
  wrapperBackground,
}: LayoutProps) => {
  return (
    <S.Container>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header title={title} headerHeight={headerHeight} />
      <S.WrapperContainer bgColor={wrapperBackground}>
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.WrapperContainer>
    </S.Container>
  );
};
