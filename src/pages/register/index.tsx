import { GetServerSideProps } from 'next';

import { Layout } from 'components/Layout';
import { RegisterBox } from 'components/RegisterBox';
import { parseCookies } from 'nookies';
import * as S from 'styles/RegisterStyles';

export default function Register() {
  return (
    <Layout pageTitle="Registro | Agenda de churras" title="Agenda de Churras">
      <S.Container>
        <RegisterBox />
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
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
