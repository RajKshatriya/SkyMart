import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

const PublicRoutes = () => {
    const { loggedInUser } = useAuthContext();

    return loggedInUser ? <Navigate to="/main" replace /> : <Outlet />;
};

export default PublicRoutes;