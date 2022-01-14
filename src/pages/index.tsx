import { GetServerSideProps } from 'next';

import { Layout } from 'components/Layout';
import { LoginBox } from 'components/LoginBox';
import { parseCookies } from 'nookies';
import * as S from 'styles/HomeStyles';

export default function Home() {
  return (
    <Layout pageTitle="Início | Agenda de churras" title="Agenda de Churras">
      <S.Container>
        <LoginBox />
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@barbecue:token': token, '@barbecue:userdata_cache': userData } =
    parseCookies(ctx);

  if (token && userData) {
    return {
      redirect: {
        destination: '/my-churras',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
