import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';

import { Button, Header, Loader, Navbar, Footer } from '../../components';

import { useAuth } from '../../hooks';

import { Entry, Journal } from '../../interfaces';

import http from '../../services/api';

import emptyStateImg from '../../assets/images/empty-state.svg';

import { Container, EmptyList, List } from './styles';

type NoteListParams = {
  journalId: string;
};

/**
 * @export
 * @component
 * @name JournalsList
 *
 * @description
 * JournalsList
 */
function JournalsList() {
  const [journal, setJournal] = useState<Journal>();
  const [entries, setEntries] = useState<Entry[]>();

  const { journalId } = useParams<NoteListParams>();

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const handleEditJournal = () => {
    navigate(`/journals/new/${journalId}?updateId=${journalId}`);
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        setJournal(
          response.journals.filter(
            (journal: Journal) => journal.id === journalId
          )[0] || null
        );
      } else {
        toast.error('Oops, An error occurred fetching journals!');

        signOut();
      }
    });
  }, [user, journalId, signOut]);

  const getEntries = useCallback(() => {
    http.get(`/journals/entries/${journalId}`).then((response: any) => {
      if (response) {
        setEntries(response.entries as Entry[]);
      } else {
        toast.error('Oops, An error occurred fetching journals!');
      }
    });
  }, [journalId]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  return (
    <>
      <Header />

      <Container>
        {!journal ? (
          <Loader />
        ) : journal !== null ? (
          entries?.length ? (
            <>
              <Navbar
                linkText={journal.title}
                linkToBackButton="/journals"
                linkToAddButton={`/note/new/${journalId}`}
              />

              <List>
                {entries?.map((entry) => (
                  <Link
                    key={entry.id}
                    to={`/journals/${journalId}/${entry.id}`}
                  >
                    <li>
                      <div>{entry.title}</div>
                    </li>
                  </Link>
                ))}
              </List>
            </>
          ) : (
            <EmptyList>
              <img src={emptyStateImg} alt="" />

              <Link to={`/note/new/${journalId}`}>Create a note</Link>
            </EmptyList>
          )
        ) : (
          <Navigate to="/journals" />
        )}
      </Container>

      <Footer>
        <Button type="button" onClick={handleEditJournal} isOutlined>
          <FaEdit />
          Edit journal
        </Button>
      </Footer>
    </>
  );
}

export default JournalsList;