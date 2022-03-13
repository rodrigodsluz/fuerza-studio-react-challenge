import React from 'react';
import { Navigate } from 'react-router-dom';

import { Button, Input } from '../../components';

import logoImg from '../../assets/images/logo.svg';

import { IForm } from '../../interfaces';

import { Container, StyledForm, StyledLink } from './styles';

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
    <Navigate to="/journals" />
  ) : (
    <Container>
      <StyledLink to="/">
        <img src={logoImg} alt="Nocturnal logo" />
      </StyledLink>

      <h1>{title}</h1>

      <StyledLink isLink to={linkButtonPath}>
        {linkButtonLabel}
      </StyledLink>

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

        {hasForgotPassword && <StyledLink to="/">Forgot Password?</StyledLink>}

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
