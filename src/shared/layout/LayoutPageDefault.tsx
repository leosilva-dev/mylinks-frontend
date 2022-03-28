import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/header/Header';

export const LayoutPageDefault: React.FC = ({ children }) => {
  const location = useLocation();
  const pathToShowHeader = ['/profile', '/entrar', '/cadastrar'];

  const tabTitle = location.pathname.replace('/', '').replace('@/', '@');

  useEffect(() => {
    document.title = `Mylinks | ${tabTitle}`;
  }, [location.pathname, tabTitle]);

  return (
    <>
      {pathToShowHeader.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};
