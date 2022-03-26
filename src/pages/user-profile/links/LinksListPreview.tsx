import React from 'react';
import { useProfileContext } from '../../../shared/hooks/useProfileContext';

import { ILinks } from '../../../shared/services/api/links/Links';
import { LinkPreview } from './LinkPreview';

export const LinksListPreview: React.FC = () => {
  const { links } = useProfileContext();

  return (
    <>
      {links
        .filter((links) => links.enabled === true)
        .map((link: ILinks) => {
          return (
            <LinkPreview key={link.id} title={link.title} url={link.url} />
          );
        })}
    </>
  );
};
