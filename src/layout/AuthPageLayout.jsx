import React from 'react';
import { Outlet } from 'react-router';
import MagicRings from '../Effects/MagicRings';

export const AuthPageLayout = () => {
  return (
    <MagicRings>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </MagicRings>
  );
};

export default AuthPageLayout;