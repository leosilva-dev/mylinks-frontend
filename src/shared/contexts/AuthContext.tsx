import React, { createContext, useCallback, useEffect, useState } from 'react';
import { authService, IRegisterUser } from '../services/api/auth/Auth';
import { Api } from '../services/axios-config/AxiosConfig';
import { Feedback } from '../services/feedback/Feedback';

interface IAuthContextData {
  authenticated: boolean;
  isLoading: boolean;
  handleLogin: (email: string, password: string) => Promise<boolean>;
  handleSignUp: (user: IRegisterUser) => Promise<boolean>;
  handleLogout: () => void;
}
export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      Api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        token,
      )}`;

      setAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const handleLogin = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      const response = await authService.login(email, password);
      if (response !== undefined && response.success) {
        localStorage.setItem('token', JSON.stringify(response.token));
        Api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.token}`;
        setAuthenticated(true);
        Feedback(response.message, 'success');
        setIsLoading(false);
        return response.success;
      } else {
        Feedback(response.message, 'error');
        setIsLoading(false);
        return response.success;
      }
    },
    [],
  );

  const handleLogout = useCallback(async () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    Api.defaults.headers.common['Authorization'] = '';
  }, []);

  const handleSignUp = useCallback(
    async (user: IRegisterUser): Promise<boolean> => {
      setIsLoading(true);

      const response = await authService.register(user);
      if (response !== undefined && response.success) {
        localStorage.setItem('token', JSON.stringify(response.token));
        Api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.token}`;
        setAuthenticated(true);
        Feedback(response.message, 'success');
        setIsLoading(false);
        return response.success;
      } else {
        Feedback(
          'Ocorreu um erro ao realizar o cadastro, tente novamente',
          'error',
        );
        setIsLoading(false);
        return false;
      }
    },
    [],
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
