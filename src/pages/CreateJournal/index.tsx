import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { Button, Header } from '../../components';

import { useAuth, useQuery } from '../../hooks';

import http from '../../services/api';

import { Journal } from '../../interfaces';

import { Container } from './styles';

/**
 * @export
 * @component
 * @name CreateJournal
 *
 * @description
 * CreateJournal
 */ function CreateJournal() {
  const [journalName, setJournalName] = useState('');

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  let updateIdQuery = useQuery().get('updateId');

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        const journal = (response.journals as Journal[]).filter(
          (journal) => journal.id === updateIdQuery
        )[0];

        setJournalName(journal.title);
      } else {
        // eslint-disable-next-line
        updateIdQuery = null;
      }
    });
  }, []);

  useEffect(() => {
    if (updateIdQuery) {
      getJournals();
    }
  }, [getJournals, updateIdQuery]);

  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!journalName.trim().length) {
      toast.warning('The journal name is required!');
      return null;
    }

    if (!updateIdQuery) {
      const response = await http.post('/journals', {
        userId: user.id,
        title: journalName,
      });

      if (!response) {
        toast.error('Oops, an error occurred on creating the journal!');
        signOut();

        return null;
      }

      navigate('/journals');
    } else {
      const response = await http.put(`/journals/${updateIdQuery}`, {
        userId: user.id,
        title: journalName,
      });

      if (!response) {
        toast.error('Oops, an error occurred on updating the journal!');

        return null;
      }

      navigate('/journals');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <div />
          <div>
            <p>{journalName}</p>
          </div>
        </div>

        <form onSubmit={handleOnSubmitForm}>
          <input
            type="text"
            placeholder="insert journal name"
            value={journalName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setJournalName(e.target.value);
            }}
          />

          <Button type="submit">Save Journal</Button>
        </form>
      </Container>
    </>
  );
}

export default CreateJournal;
