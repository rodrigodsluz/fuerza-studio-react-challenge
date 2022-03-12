import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

/**
 * @export
 * @component
 * @name PublicRoutes
 *
 * @description
 * Public Routes
 */
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/signin" />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
