import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, UserProfile, SignIn, SignUp } from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route
        path="/profile"
        element={<PrivateRoute component={UserProfile} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
