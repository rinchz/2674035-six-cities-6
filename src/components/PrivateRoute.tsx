import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
  isAuthorized: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthorized }) =>
  isAuthorized ? children : <Navigate to="/login" replace />;

export default PrivateRoute;
