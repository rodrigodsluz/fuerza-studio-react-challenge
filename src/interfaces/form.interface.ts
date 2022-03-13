import { FormEvent } from 'react';

export interface IForm {
  isAuthenticated: boolean;
  title: string;
  username: string;
  password: string;
  email?: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  handleOnSubmitForm: (e: FormEvent<Element>) => void;
  linkButtonLabel: string;
  linkButtonPath: string;
  usernameLabel: string;
  passwordLabel: string;
  hasForgotPassword?: boolean;
  submitButtonLabel: string;
  hasOptionalEmail?: boolean;
}
