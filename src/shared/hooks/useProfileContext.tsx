import { useContext } from 'react';

import { ProfileContext } from '../contexts/ProfileContext';

export const useProfileContext = () => {
  const context = useContext(ProfileContext);

  return context;
};
