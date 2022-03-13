import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

/**
 * @export
 * @component
 * @name Routes
 *
 * @description
 * Routes
 */
function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default Routes;
