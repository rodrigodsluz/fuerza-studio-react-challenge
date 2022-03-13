import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Journals, CreateJournal, JournalsList } from '../pages';

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
        <Route index element={<Journals />} />
        <Route path="/journals/:journalId" element={<JournalsList />} />
        <Route path="/journals/new" element={<CreateJournal />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
