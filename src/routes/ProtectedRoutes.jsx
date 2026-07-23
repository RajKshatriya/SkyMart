import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoutes = () => {
  const { loggedInUser } = useAuthContext();

  return loggedInUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;