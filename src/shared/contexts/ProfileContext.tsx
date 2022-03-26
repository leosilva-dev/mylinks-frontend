import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ILinks, linkService } from '../services/api/links/Links';
import { IUser } from '../services/api/user/User';

interface IProfileContextData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  description: string;
  links: ILinks[];
  deleteLink: (id: string) => void;
  changeTitleLink: (id: string, title: string) => void;
  changeUrlLink: (id: string, url: string) => void;
  toggleEnableLink: (id: string) => void;
  defineLinks: (links: ILinks[]) => void;
  defineUserFirstName: (value: string) => void;
  defineUserLastName: (value: string) => void;
  defineUserEmail: (value: string) => void;
  defineUserUsername: (value: string) => void;
  defineUserDescription: (value: string) => void;
  defineUser: (user: IUser) => void;
  clearUser: () => void;
}
export const ProfileContext = createContext<IProfileContextData>(
  {} as IProfileContextData,
);

export const ProfileProvider: React.FC = ({ children }) => {
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

  const deleteLink = useCallback(
    (id: string) => {
      const result = links.filter((link) => link.id !== id);
      setLinks(result);
    },
    [links],
  );

  const toggleEnableLink = useCallback(
    (id: string) => {
      const link = links.find((link) => link.id === id);
      const otherLinks = links.filter((link) => link.id !== id);

      if (link) {
        link.enabled = !link.enabled;
        otherLinks.push(link);
        otherLinks.sort((a, b) => a.order - b.order);
        setLinks(otherLinks);
      }
    },
    [links],
  );

  const changeTitleLink = useCallback(
    (id: string, value: string) => {
      const link = links.find((link) => link.id === id);
      const otherLinks = links.filter((link) => link.id !== id);

      if (link) {
        link.title = value;
        otherLinks.push(link);
        otherLinks.sort((a, b) => a.order - b.order);
        setLinks(otherLinks);
      }
    },
    [links],
  );

  const changeUrlLink = useCallback(
    (id: string, value: string) => {
      const link = links.find((link) => link.id === id);
      const otherLinks = links.filter((link) => link.id !== id);

      if (link) {
        link.url = value;
        otherLinks.push(link);
        otherLinks.sort((a, b) => a.order - b.order);
        setLinks(otherLinks);
      }
    },
    [links],
  );

  const defineLinks = useCallback((links: ILinks[]) => {
    setLinks([...links]);
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
    setLinks([]);
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
    <ProfileContext.Provider
      value={{
        id,
        firstName,
        lastName,
        username,
        email,
        description,
        links,
        deleteLink,
        toggleEnableLink,
        changeTitleLink,
        changeUrlLink,
        defineLinks,
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
    </ProfileContext.Provider>
  );
};
