import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { LayoutPageDefault } from './shared/layout/LayoutPageDefault';
import { ProfileProvider } from './shared/contexts/ProfileContext';
import { AuthProvider } from './shared/contexts/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BrowserRouter>
          <LayoutPageDefault>
            <AppRoutes />
          </LayoutPageDefault>
        </BrowserRouter>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
