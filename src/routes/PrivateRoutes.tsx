import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import JournalsPage from '../pages/Journals';

/**
 * @export
 * @component
 * @name PrivateRoutes
 *
 * @description
 * Private Routes
 */
function PrivateRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/journals" />} />
      <Route path="/journals">
        <Route index element={<JournalsPage />} />
        <Route path="/journals/:journalId" element={<JournalsPage />} />
        <Route path="/journals/new" element={<JournalsPage />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
