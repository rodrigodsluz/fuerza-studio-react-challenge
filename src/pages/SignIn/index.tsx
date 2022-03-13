import React, { FormEvent } from 'react';
import { toast } from 'react-toastify';

import { useAuth, useFormFields } from '../../hooks';

import { Form } from '../../components';

import validatedForm from '../../utils/validatedForm';

/**
 * @export
 * @component
 * @name SignInPage
 *
 * @description
 * SignIn
 */
function SignInPage() {
  const { username, setUsername, password, setPassword } = useFormFields();

  const { isAuthenticated, authenticate } = useAuth();

  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatedForm({ username, password })) {
      return;
    }

    if (await authenticate(username, password)) {
      toast.success('Signed in successfully!');
    } else {
      toast.error('User not registered!');
    }
  };

  return (
    <Form
      isAuthenticated={isAuthenticated}
      title="Sign in"
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleOnSubmitForm={handleOnSubmitForm}
      linkButtonLabel="Sign up"
      linkButtonPath="/signup"
      usernameLabel="Your username"
      passwordLabel="Your password"
      hasForgotPassword
      submitButtonLabel="Log in"
    />
  );
}

export default SignInPage;
