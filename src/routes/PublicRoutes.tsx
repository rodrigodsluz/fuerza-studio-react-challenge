import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SignIn, SignUp } from '../pages';

/**
 * @export
 * @component
 * @name PublicRoutes
 *
 * @description
 * Public Routes
 */
function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default PublicRoutes;
