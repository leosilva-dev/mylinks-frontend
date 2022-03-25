import React from "react";
import { Navigate } from "react-router-dom";

import { useUserContext } from "../shared/hooks/useUserContext";

interface IPrivateRouteProps {
  component: React.ComponentType;
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: RouteComponent,
}) => {
  const { authenticated, isLoading } = useUserContext();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (authenticated) {
    return <RouteComponent />;
  }

  if (!authenticated) {
    return <Navigate to="/entrar" />;
  }

  return <Navigate to="/" />;
};
