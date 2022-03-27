import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/header/Header';

export const LayoutPageDefault: React.FC = ({ children }) => {
  const location = useLocation();
  const pathToShowHeader = ['/profile', '/entrar', '/cadastrar'];

  return (
    <>
      {pathToShowHeader.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};
