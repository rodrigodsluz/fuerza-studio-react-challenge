import React, { useCallback, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Redirect, useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { Button, Footer, Header, Loader, Navbar } from '../../components';

import { useAuth } from '../../hooks';

import { Entry, Journal } from '../../interfaces';

import http from '../../services/api';

import { Container, Content } from './styles';

type NoteContentParams = {
  journalId: string;
  noteId: string;
};

/**
 * @export
 * @component
 * @name NoteContent
 *
 * @description
 * NoteContent
 */
function NoteContent() {
  const [journal, setJournal] = useState<Journal>();
  const [entry, setEntry] = useState<Entry | null>();

  const { user, signOut } = useAuth();

  const { journalId, noteId } = useParams<NoteContentParams>();

  const history = useHistory();

  const handleEditNote = () => {
    history.push(`/note/new/${journalId}?updateId=${entry?.id}`);
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        toast.error('Oops, an error occurred on fetching journals!');

        signOut();

        return null;
      }

      setJournal(
        response.journals.filter(
          (journal: Journal) => journal.id === journalId
        )[0] || null
      );
    });
  }, [user, journalId, signOut]);

  const getEntries = useCallback(() => {
    if (journal === null) {
      setEntry(null);
    }
    if (journal) {
      http.get(`/journals/entries/${journalId}`).then((response: any) => {
        if (!response) {
          toast.error('Oops, an error occurred on fetching entries!');
          return;
        }

        setEntry(
          response.entries.filter((note: Entry) => note.id === noteId)[0] ||
            null
        );
      });
    }
  }, [journal, noteId, journalId]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  useEffect(() => {
    getEntries();
  }, [journal, getEntries]);

  return (
    <>
      <Header />

      <Container>
        <Navbar
          disableButton
          linkText="Back"
          linkToBackButton={`/journals/${journal?.id}`}
        />

        {!journal || !entry ? (
          <Loader />
        ) : journal && entry ? (
          <Content>
            <h1>{entry.title}</h1>

            <p>{entry.content}</p>
          </Content>
        ) : (
          <Redirect to="/journals" />
        )}
      </Container>

      <Footer>
        <Button type="button" onClick={handleEditNote} isOutlined>
          <FaEdit />
          Edit note
        </Button>
      </Footer>
    </>
  );
}

export default NoteContent;
