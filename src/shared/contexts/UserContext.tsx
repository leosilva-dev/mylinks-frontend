import React, { createContext, useCallback, useEffect, useState } from 'react';
import { IUser, userService } from '../services/api/user/User';
import { Api } from '../services/axios-config/AxiosConfig';
import { Feedback } from '../services/feedback/Feedback';

interface IUserContextData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  description: string;
  authenticated: boolean;
  isLoading: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleSignUp: (user: IUser) => void;
  defineUserFirstName: (value: string) => void;
  defineUserLastName: (value: string) => void;
  defineUserEmail: (value: string) => void;
  defineUserUsername: (value: string) => void;
  defineUserDescription: (value: string) => void;
}
export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      Api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        token,
      )}`;

      userService.getUserByToken(token).then((response) => {
        DefineUser(
          response.data.id,
          response.data.firstName,
          response.data.lastName,
          response.data.username,
          response.data.email,
          response.data.description || '',
        );
      });

      setAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    setIsLoading(true);

    const response = await userService.signIn(email, password);
    if (response.success) {
      localStorage.setItem('token', JSON.stringify(response.token));
      Api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
      DefineUser(
        response.data.id,
        response.data.firstName,
        response.data.lastName,
        response.data.username,
        response.data.email,
        response.data.description || '',
      );
      setAuthenticated(true);
      Feedback('Login realizado com sucesso!', 'success');
    } else {
      console.log(response.messages?.join(',\n'));
    }
    setIsLoading(false);
  }, []);

  const handleLogout = useCallback(async () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    Api.defaults.headers.common['Authorization'] = '';
    clearUser();
  }, []);

  const handleSignUp = useCallback(async (user: IUser) => {
    setIsLoading(true);

    const response = await userService.signUp(user);
    if (response.success) {
      localStorage.setItem('token', JSON.stringify(response.token));
      Api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
      DefineUser(
        response.data.id,
        response.data.firstName,
        response.data.lastName,
        response.data.username,
        response.data.email,
        response.data.description || '',
      );
      setAuthenticated(true);
      Feedback('Cadastro realizado com sucesso!', 'success');
    } else {
      console.log(response.messages?.join(',\n'));
    }
    setIsLoading(false);
  }, []);

  const defineUserFirstName = useCallback((value: string) => {
    setFirstName(value);
  }, []);
  const defineUserLastName = useCallback((value: string) => {
    setLastName(value);
  }, []);
  const defineUserUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);
  const defineUserEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);
  const defineUserDescription = useCallback((value: string) => {
    setDescription(value);
  }, []);

  const clearUser = useCallback(() => {
    setId('');
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setDescription('');
  }, []);

  const DefineUser = useCallback(
    (
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      description: string,
    ) => {
      setId(id);
      setFirstName(firstName);
      setLastName(lastName);
      setUsername(username);
      setEmail(email);
      setDescription(description);
    },
    [],
  );

  return (
    <UserContext.Provider
      value={{
        id,
        firstName,
        lastName,
        username,
        email,
        description,
        authenticated,
        isLoading,
        handleLogin,
        handleLogout,
        handleSignUp,
        defineUserFirstName,
        defineUserLastName,
        defineUserUsername,
        defineUserEmail,
        defineUserDescription,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
