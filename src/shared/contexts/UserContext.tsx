import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ILinks, linkService } from '../services/api/links/Links';
import { IUser } from '../services/api/user/User';
interface IUserContextData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  description: string;
  links: ILinks[];
  defineUserFirstName: (value: string) => void;
  defineUserLastName: (value: string) => void;
  defineUserEmail: (value: string) => void;
  defineUserUsername: (value: string) => void;
  defineUserDescription: (value: string) => void;
  defineUser: (user: IUser) => void;
  clearUser: () => void;
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

  const [links, setLinks] = useState<ILinks[]>([]);

  useEffect(() => {
    linkService.getLinksByUserId(id).then((response) => {
      setLinks(response.data);
    });
  }, [id]);

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

  const defineUser = useCallback((user: IUser) => {
    setId(user.id);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setUsername(user.username);
    setEmail(user.email);
    setDescription(user.description || '');
  }, []);

  return (
    <UserContext.Provider
      value={{
        id,
        firstName,
        lastName,
        username,
        email,
        description,
        links,
        defineUserFirstName,
        defineUserLastName,
        defineUserUsername,
        defineUserEmail,
        defineUserDescription,
        defineUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
