import React from 'react';

import { CallToAction } from './CallToAction';
import { Community } from './Community';
import { Features } from './Features';
import { Footer } from './Footer';

export const Home: React.FC = () => {
  return (
    <>
      <CallToAction />
      <Features />
      <Community />
      <Footer />
    </>
  );
};
