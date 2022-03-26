import React from 'react';
import { useProfileContext } from '../../../shared/hooks/useProfileContext';

import { ILinks } from '../../../shared/services/api/links/Links';
import { LinkEdit } from './LinkEdit';

export const LinksListEdit: React.FC = () => {
  const { links } = useProfileContext();

  return (
    <>
      {links.map((link: ILinks) => {
        return (
          <LinkEdit
            key={link.id}
            id={link.id}
            title={link.title}
            url={link.url}
            enabled={link.enabled}
            order={link.order}
          />
        );
      })}
    </>
  );
};