import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { LayoutPageDefault } from './shared/layout/LayoutPageDefault';
import { ProfileProvider } from './shared/contexts/ProfileContext';
import { AuthProvider } from './shared/contexts/AuthContext';

export const App = () => {
  return (
    <ProfileProvider>
      <AuthProvider>
        <BrowserRouter>
          <LayoutPageDefault>
            <AppRoutes />
          </LayoutPageDefault>
        </BrowserRouter>
      </AuthProvider>
    </ProfileProvider>
  );
};

export default App;
