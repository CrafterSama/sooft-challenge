'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import useAppStoreContext from '@/state-management/users-app-global-state';
import { useGetSessionFromCookies } from '@/utils/auth-cookie';

const AuthDirective = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { auth } = useAppStoreContext();
  const { isAuthenticated } = useGetSessionFromCookies() ?? {};

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/quotes');
    } else {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, auth]);

  return <>{children}</>;
};

export default AuthDirective;
