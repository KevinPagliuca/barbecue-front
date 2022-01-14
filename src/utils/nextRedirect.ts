import { GetServerSidePropsContext } from 'next';

import { destroyCookie } from 'nookies';

export const nextRedirect = (ctx: GetServerSidePropsContext) => {
  destroyCookie(ctx, '@barbecue:token');
  destroyCookie(ctx, '@barbecue:userdata_cache');
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
