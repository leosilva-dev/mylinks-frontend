import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserProfile, SignIn, SignUp, LinksSetup } from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/links-setup" element={<LinksSetup />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
