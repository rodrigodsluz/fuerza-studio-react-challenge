import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Button, Header, Loader } from '../../components';

import { useAuth } from '../../hooks';

import http from '../../services/api';

import { Journal } from '../../interfaces';

import emptyStateImg from '../../assets/images/empty-state.svg';

import { Container, EmptyList, List } from './styles';

/**
 * @export
 * @component
 * @name JournalsPage
 *
 * @description
 * JournalSPage
 */
function JournalsPage() {
  const [journals, setJournals] = useState<Journal[]>();

  const history = useHistory();

  const { user, signOut } = useAuth();

  const handleAddJournal = () => {
    history.push('/journals/new');
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        const { journals } = response;

        setJournals(journals as Journal[]);
      } else {
        toast.error(
          "Oops, you've been signed out because the page was reloaded or an error occurred fetching journals! Please sign up and sign in again!"
        );

        signOut();
      }
    });
  }, [signOut, user]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <>
      <Header>
        {journals?.length && (
          <Button onClick={handleAddJournal} isOutlined>
            <FaPlus /> Add Journal
          </Button>
        )}
      </Header>

      <Container>
        {journals?.length ? (
          <>
            <h1>Your Journals</h1>
            <List>
              {journals?.map((journal) => (
                <Link to={`/journals/${journal.id}`} key={journal.id}>
                  <li>
                    <div />
                    <div>{journal.title}</div>
                  </li>
                </Link>
              ))}
            </List>
          </>
        ) : journals ? (
          <EmptyList>
            <img src={emptyStateImg} alt="" />

            <Link to="/journals/new">Create a journal</Link>
          </EmptyList>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}

export default JournalsPage;
