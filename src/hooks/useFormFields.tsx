import { useState } from 'react';

function useFormFields() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
  };
}

export default useFormFields;
