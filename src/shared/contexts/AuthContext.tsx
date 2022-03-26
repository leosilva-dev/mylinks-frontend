import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useProfileContext } from '../hooks/useProfileContext';
import { IUser, userService } from '../services/api/user/User';
import { authService } from '../services/api/auth/Auth';
import { Api } from '../services/axios-config/AxiosConfig';
import { Feedback } from '../services/feedback/Feedback';

interface IAuthContextData {
  authenticated: boolean;
  isLoading: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleSignUp: (user: IUser) => void;
}
export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const { defineUser, clearUser } = useProfileContext();
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      Api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        token,
      )}`;

      userService.getUserByToken(token).then((response) => {
        defineUser(response.data);
      });

      setAuthenticated(true);
    }

    setIsLoading(false);
  }, [defineUser]);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);

      const response = await authService.signIn(email, password);
      if (response.success) {
        localStorage.setItem('token', JSON.stringify(response.token));
        Api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.token}`;
        defineUser(response.data);
        setAuthenticated(true);
        Feedback('Login realizado com sucesso!', 'success');
      } else {
        console.log(response.messages?.join(',\n'));
      }
      setIsLoading(false);
    },
    [defineUser],
  );

  const handleLogout = useCallback(async () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    Api.defaults.headers.common['Authorization'] = '';
    clearUser();
  }, [clearUser]);

  const handleSignUp = useCallback(
    async (user: IUser) => {
      setIsLoading(true);

      const response = await authService.signUp(user);
      if (response.success) {
        localStorage.setItem('token', JSON.stringify(response.token));
        Api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.token}`;
        defineUser(response.data);
        setAuthenticated(true);
        Feedback('Cadastro realizado com sucesso!', 'success');
      } else {
        console.log(response.messages?.join(',\n'));
      }
      setIsLoading(false);
    },
    [defineUser],
  );

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        isLoading,
        handleLogin,
        handleLogout,
        handleSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
