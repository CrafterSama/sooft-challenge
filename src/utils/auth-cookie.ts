import Cookies from 'js-cookie';

import { COOKIE_KEY, authSession } from '@/types/common';

export const saveSessionToCookies = (session: authSession) => {
  Cookies.set(COOKIE_KEY, JSON.stringify(session), { expires: 7 }); // 7 días
};

export const useGetSessionFromCookies = (): authSession | null => {
  const cookie = Cookies.get(COOKIE_KEY);
  return cookie ? JSON.parse(cookie) : null;
};

export const removeSessionFromCookies = () => {
  Cookies.remove(COOKIE_KEY);
};
