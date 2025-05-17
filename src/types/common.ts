export interface LoginFormValues {
  email: string;
  password: string;
}

export interface AuthUser {
  name: string;
  email: string;
}

export interface authSession {
  user: AuthUser;
  isAuthenticated: boolean;
}

export const COOKIE_KEY = 'auth_user';
