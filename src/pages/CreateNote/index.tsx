import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { Button, Header, Loader, Navbar } from '../../components';

import { useAuth, useQuery } from '../../hooks';

import { Entry, Journal } from '../../interfaces';

import http from '../../services/api';

import { Container } from './styles';

type CreateNoteParams = {
  journalId: string;
};

/**
 * @export
 * @component
 * @name CreateNote
 *
 * @description
 * CreateNote
 */
function CreateNote() {
  const [noteName, setNoteName] = useState('');
  const [content, setContent] = useState('');
  const [journal, setJournal] = useState<Journal>();

  const history = useHistory();

  const { user, signOut } = useAuth();

  const { journalId } = useParams<CreateNoteParams>();

  let updateIdQuery = useQuery().get('updateId');

  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (noteName.trim() === '' || content.trim() === '') {
      if (noteName.trim() === '') {
        toast.warning('The name is required!');
      }

      if (content.trim() === '') {
        toast.warning('The content is required!');
      }
      return null;
    }

    if (!updateIdQuery) {
      const response = await http.post(`/journals/entry/${journalId}`, {
        title: noteName,
        content: content,
      });

      if (!response) {
        toast.error('Oops, an error occurred on creating the note!');
        return null;
      }

      history.push(`/journals/${journalId}`);
    } else {
      const response = await http.put(`/journals/entry/${updateIdQuery}`, {
        title: noteName,
        content: content,
      });

      if (!response) {
        toast.error('Oops, an error occurred on updating the note!');
        return null;
      }

      history.push(`/journals/${journalId}/${updateIdQuery}`);
    }
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        toast.error(
          'Oops, an error occurred fetching journals on creating note!'
        );
        signOut();
        return null;
      }

      if (updateIdQuery) {
        http.get(`/journals/entries/${journalId}`).then((response: any) => {
          if (response) {
            const entry = (response.entries as Entry[]).filter(
              (entry) => entry.id === updateIdQuery
            )[0];

            setNoteName(entry.title);
            setContent(entry.content);
          } else {
            // eslint-disable-next-line
            updateIdQuery = null;
          }
        });
      }

      setJournal(
        response.journals.filter(
          (journal: Journal) => journal.id === journalId
        )[0] || null
      );
    });
  }, []);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <>
      <Header />

      <Container>
        {!journal ? (
          <Loader />
        ) : journal !== null ? (
          <>
            <Navbar
              disableButton
              linkToBackButton={`/journals/${journal.id}`}
              linkText={journal.title}
            />

            <form onSubmit={handleOnSubmitForm}>
              <input
                type="text"
                placeholder="Enter note name"
                value={noteName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setNoteName(e.target.value);
                }}
              />

              <textarea
                placeholder="Write your note"
                value={content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setContent(e.target.value);
                }}
              />

              <Button type="submit">Save note</Button>
            </form>
          </>
        ) : (
          <Redirect to="/journals" />
        )}
      </Container>
    </>
  );
}

export default CreateNote;
