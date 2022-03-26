import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../shared/hooks/useAuthContext';
interface IPrivateRouteProps {
  component: React.ComponentType;
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: RouteComponent,
}) => {
  const { authenticated, isLoading } = useAuthContext();

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
