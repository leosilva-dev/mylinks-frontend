import React from "react";
import { Navigate } from "react-router-dom";

import { ROLES } from "../shared/auth/roles";

interface IPrivateRouteProps {
  component: React.ComponentType;
  roles: ROLES[];
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: RouteComponent,
  roles,
}) => {
  //https://github.com/akursat/react-router-example/blob/main/src/PrivateRoute.tsx

  const user = { roles: ROLES.USER }; /* useSelector(selectCurrentUser) */
  const isAuthenticated = true; /* Refactor: get value from userContext */
  const userHasRequiredRole = user && roles.includes(user.roles) ? true : false;

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/entrar" />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/home" />;
  }

  return <Navigate to="/" />;
};
