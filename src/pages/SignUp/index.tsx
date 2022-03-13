import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { useAuth, useFormFields } from '../../hooks';

import { Form } from '../../components';
import validatedForm from '../../utils/validatedForm';

/**
 * @export
 * @component
 * @name SignUpPage
 *
 * @description
 * SignUpPage
 */
function SignUpPage() {
  const { username, setUsername, password, setPassword, email, setEmail } =
    useFormFields();

  const { isAuthenticated, newAccount } = useAuth();

  const navigate = useNavigate();

  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatedForm({ username, password })) {
      return;
    }

    if (await newAccount(username, password, email)) {
      toast.success('Congrats! Your account has been created!');
      navigate('/');
    } else {
      toast.error('Oops, a user with that username already exists!');
    }
  };

  return (
    <Form
      isAuthenticated={isAuthenticated}
      title="Sign up"
      username={username}
      password={password}
      email={email}
      setUsername={setUsername}
      setPassword={setPassword}
      setEmail={setEmail}
      handleOnSubmitForm={handleOnSubmitForm}
      linkButtonLabel="Already have an account"
      linkButtonPath="/"
      usernameLabel="Define a username"
      passwordLabel="Set your password"
      submitButtonLabel="Create account"
      hasOptionalEmail
    />
  );
}

export default SignUpPage;
