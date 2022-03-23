import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserProfile, SignIn, SignUp, LinksSetup } from "../pages";
import { ROLES } from "../shared/auth/roles";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />

      <Route
        path="/profile"
        element={<PrivateRoute roles={[ROLES.USER]} component={UserProfile} />}
      />
      <Route
        path="/links-setup"
        element={<PrivateRoute roles={[ROLES.USER]} component={LinksSetup} />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};
