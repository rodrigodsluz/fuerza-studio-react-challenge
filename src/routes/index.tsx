import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  CreateJournal,
  CreateNote,
  NotesList,
  SignIn,
  SignUp,
  Journals,
  NoteContent,
} from '../pages';

import PrivateRoute from './PrivateRoutes';

/**
 * @export
 * @component
 * @name Routes
 *
 * @description
 * Routes
 */
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <PrivateRoute exact path="/journals" component={Journals} />

        <PrivateRoute path="/journals/new" component={CreateJournal} />

        <PrivateRoute
          exact
          component={NotesList}
          path="/journals/:journalId/"
        />

        <PrivateRoute path="/note/new/:journalId" component={CreateNote} />

        <PrivateRoute
          path="/journals/:journalId/:noteId"
          component={NoteContent}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
