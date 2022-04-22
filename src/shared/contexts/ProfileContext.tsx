import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  ILinks,
  IProfileToUpdate,
  IUser,
  profileService,
} from '../services/api/profile/Profile';
import { Feedback } from '../services/feedback/Feedback';

interface IProfileContextData {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  links: ILinks[];
  createLink: () => void;
  deleteLink: (id: string) => void;
  changeTitleLink: (id: string, title: string) => void;
  changeUrlLink: (id: string, url: string) => void;
  toggleEnableLink: (id: string) => void;
  defineLinks: (links: ILinks[]) => void;
  defineUserName: (value: string) => void;
  defineUserEmail: (value: string) => void;
  defineUserUsername: (value: string) => void;
  defineUserBio: (value: string) => void;
  defineUser: (user: IUser) => void;
  clearUser: () => void;
  updateProfile: (profile: IProfileToUpdate) => Promise<boolean>;
}
export const ProfileContext = createContext<IProfileContextData>(
  {} as IProfileContextData,
);

export const ProfileProvider: React.FC = ({ children }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const [links, setLinks] = useState<ILinks[]>([]);

  const { authenticated } = useAuthContext();

  const defineUser = useCallback((user: IUser) => {
    setId(user._id);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setBio(user.bio || '');
  }, []);

  useEffect(() => {
    if (authenticated) {
      profileService.getUser().then((response) => {
        if (response !== undefined && response.success) {
          defineUser(response.data);
        }
      });

      profileService.getLinks().then((response) => {
        if (response !== undefined && response.success) {
          setLinks(response.data);
        }
      });
    }
  }, [authenticated, defineUser, id]);

  const updateProfile = useCallback(
    async (profile: IProfileToUpdate): Promise<boolean> => {
      const response = await profileService.updateProfile(profile);

      if (response !== undefined && response.success) {
        defineUser(response.data);
        Feedback(response.message, 'success');
        return response.success;
      } else {
        Feedback(response.message, 'error');
        return response.success;
      }
    },
    [defineUser],
  );

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

  const createLink = useCallback(() => {
    const newLink: ILinks = {
      id: Math.random().toString(),
      title: '',
      url: '',
      enabled: false,
      order: 0,
    };

    links.forEach((link, index) => {
      link.order = index + 1;
    });

    const allLinks = [...links, newLink];
    allLinks.sort((a, b) => {
      return a.order - b.order;
    });
    setLinks([...allLinks]);
  }, [links]);

  const defineUserName = useCallback((value: string) => {
    setName(value);
  }, []);
  const defineUserUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);
  const defineUserEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);
  const defineUserBio = useCallback((value: string) => {
    setBio(value);
  }, []);

  const clearUser = useCallback(() => {
    setId('');
    setName('');
    setUsername('');
    setEmail('');
    setBio('');
    setLinks([]);
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        id,
        name,
        username,
        email,
        bio,
        links,
        createLink,
        deleteLink,
        toggleEnableLink,
        changeTitleLink,
        changeUrlLink,
        defineLinks,
        defineUserName,
        defineUserUsername,
        defineUserEmail,
        defineUserBio,
        defineUser,
        clearUser,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
