import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Button, Input } from '../../components';

import logoImg from '../../assets/images/logo.svg';

import { IForm } from '../../interfaces';

import { Container, StyledForm } from './styles';

/**
 * @export
 * @component
 * @name Form
 *
 * @description
 * Form
 */
function Form({
  isAuthenticated,
  title,
  username,
  password,
  email,
  setUsername,
  setPassword,
  setEmail,
  handleOnSubmitForm,
  linkButtonLabel,
  linkButtonPath,
  usernameLabel,
  passwordLabel,
  hasForgotPassword,
  submitButtonLabel,
  hasOptionalEmail,
}: IForm) {
  return isAuthenticated ? (
    <Redirect to="/journals" />
  ) : (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Nocturnal logo" />
      </Link>

      <h1>{title}</h1>

      <Link to={linkButtonPath}>{linkButtonLabel}</Link>

      <StyledForm onSubmit={handleOnSubmitForm}>
        <Input
          value={username}
          id="username"
          setValue={setUsername}
          label={usernameLabel}
        />

        <Input
          value={password}
          id="password"
          setValue={setPassword}
          label={passwordLabel}
        />

        {hasForgotPassword && <Link to="/">Forgot Password?</Link>}

        {hasOptionalEmail && (
          <Input
            value={email}
            id="email"
            setValue={setEmail && setEmail}
            label="Email (optional)"
          />
        )}

        <Button type="submit">{submitButtonLabel}</Button>
      </StyledForm>
    </Container>
  );
}

export default Form;
