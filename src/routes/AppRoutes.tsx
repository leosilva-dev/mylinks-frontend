import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  UserProfile,
  SignIn,
  SignUp,
  SharedProfile,
  NotFound,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route path="/@/:username" element={<SharedProfile />} />
      <Route
        path="/profile"
        element={<PrivateRoute component={UserProfile} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
