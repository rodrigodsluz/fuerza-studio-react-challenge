import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { useAuth } from '../hooks';

/**
 * @export
 * @component
 * @name PrivateRoute
 *
 * @description
 * PrivateRoute
 */
function PrivateRoute({ ...rest }: RouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/" />;
}

export default PrivateRoute;
