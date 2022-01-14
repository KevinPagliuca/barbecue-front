import { GetServerSidePropsContext } from 'next';

import axios from 'axios';
import { IUser } from 'interfaces/auth';
import { destroyCookie, setCookie } from 'nookies';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setAuthentication = (
  token: string,
  user: IUser,
  ctx?: GetServerSidePropsContext
) => {
  setCookie(ctx, '@barbecue:token', token, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
  setCookie(ctx, '@barbecue:userdata_cache', JSON.stringify(user), {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
  client.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const removeAuthentication = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, '@barbecue:token');
  destroyCookie(ctx, '@barbecue:userdata_cache');
  client.defaults.headers['Authorization'] = '';
};
