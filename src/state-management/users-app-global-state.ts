'use client';

import { create, useStore } from 'zustand';

import { ADMIN_USER } from '@/constants/common';
import { AuthUser } from '@/types/common';
import { Quote } from '@/types/quote';
import {
  removeSessionFromCookies,
  saveSessionToCookies,
} from '@/utils/auth-cookie';

type appStoreProps = {
  adminUser: {
    name: string;
    email: string;
  };
  auth: {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
  };
  quotes: Quote[];
  setQuotes: (quotes: Quote[]) => void;
  addQuote: (quotes: Quote) => void;
  deleteQuote: (id: string | number) => void;
};

const appStore = create<appStoreProps>((set) => ({
  adminUser: ADMIN_USER,
  auth: {
    isAuthenticated: false,
    login: (email: string, password: string) => {
      const user: AuthUser = {
        name: ADMIN_USER.name,
        email: ADMIN_USER.email,
      };
      saveSessionToCookies({ user, isAuthenticated: true });
      set((state) => ({
        auth: {
          ...state.auth,
          isAuthenticated: true,
        },
      }));
    },
    logout: () => {
      removeSessionFromCookies();
      set((state) => ({
        auth: {
          ...state.auth,
          isAuthenticated: false,
        },
      }));
    },
  },
  quotes: [],
  setQuotes: (quotes: appStoreProps['quotes']) => {
    set(() => ({
      quotes,
    }));
  },
  addQuote: (quote: Quote) => {
    set((state) => ({
      quotes: [...state.quotes, quote],
    }));
  },
  deleteQuote: (id: string | number) => {
    set((state) => ({
      quotes: state.quotes.filter((quote) => quote.id !== id),
    }));
  },
}));

const useAppStoreContext = () => useStore(appStore);

export default useAppStoreContext;
