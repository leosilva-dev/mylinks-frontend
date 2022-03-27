import React from 'react';

import { ILinksSharedProfile } from '../../../services/api/shared-profile/SharedProfile';
import { LinkPreview } from './LinkPreview';

interface ILinkPreviewListProps {
  links: ILinksSharedProfile[];
}

export const LinksListPreview: React.FC<ILinkPreviewListProps> = ({
  links,
}) => {
  return (
    <>
      {links.map((link, index) => {
        return <LinkPreview key={index} title={link.title} url={link.url} />;
      })}
    </>
  );
};
