import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { LayoutPageDefault } from './shared/layout/LayoutPageDefault';
import { UserProvider } from './shared/contexts/UserContext';
import { AuthProvider } from './shared/contexts/AuthContext';

export const App = () => {
  return (
    <UserProvider>
      <AuthProvider>
        <BrowserRouter>
          <LayoutPageDefault>
            <AppRoutes />
          </LayoutPageDefault>
        </BrowserRouter>
      </AuthProvider>
    </UserProvider>
  );
};

export default App;
