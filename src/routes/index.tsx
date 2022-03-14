import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  CreateJournal,
  CreateNote,
  JournalsList,
  SignIn,
  SignUp,
  Journals,
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
          component={JournalsList}
          path="/journals/:journalId/"
        />

        <PrivateRoute path="/note/new/:journalId" component={CreateNote} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
