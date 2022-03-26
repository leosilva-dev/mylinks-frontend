import React from 'react';
import { Header } from '../components/header/Header';

export const LayoutPageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
