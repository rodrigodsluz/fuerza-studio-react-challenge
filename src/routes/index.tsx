import React from 'react';
import { BrowserRouter } from 'react-router-dom';

///import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

/**
 * @export
 * @component
 * @name Routes
 *
 * @description
 * Routes
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default Routes;
