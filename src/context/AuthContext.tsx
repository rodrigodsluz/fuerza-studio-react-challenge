import React, { createContext, useState } from 'react';

import { AuthResponse } from '../services/mirage/routes/user';
import http from '../services/api';

import {
  IAuthContextProvider,
  IAuthContextData,
  AuthContextUser,
} from '../interfaces';

const AuthContext = createContext({} as IAuthContextData);

/**
 * @export
 * @component
 * @name AuthContextProvider
 *
 * @description
 * Auth Context Provider
 */
function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<AuthContextUser>(() => {
    return JSON.parse(sessionStorage.getItem('userNocturnal') || 'null');
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('tokenNocturnal') !== null;
  });

  const newAccount = async (
    username: string,
    password: string,
    email?: string
  ) => {
    const response: AuthResponse = await http.post('/auth/signup', {
      username,
      password,
      email,
    });

    if (response) {
      return true;
    }

    return false;
  };

  const signout = () => {
    sessionStorage.removeItem('tokenNocturnal');
    sessionStorage.removeItem('userNocturnal');

    setIsAuthenticated(false);
  };

  const authenticate = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const response: AuthResponse = await http.post('/auth/login', {
      username,
      password,
    });

    if (response) {
      const authenticatedUser = {
        id: (response as AuthResponse).user.id,
        username: (response as AuthResponse).user.username,
        journalIds: (response as AuthResponse).user.journalIds,
      };

      setUser(authenticatedUser);

      sessionStorage.setItem(
        'userNocturnal',
        JSON.stringify(authenticatedUser)
      );
      sessionStorage.setItem(
        'tokenNocturnal',
        (response as AuthResponse).token
      );

      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        newAccount,
        isAuthenticated,
        authenticate,
        user,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
