export type AuthContextUser = {
  id?: string;
  username: string;
  journalIds: string[] | null;
};

export interface IAuthContextData {
  newAccount: (
    username: string,
    password: string,
    email?: string
  ) => Promise<boolean>;
  isAuthenticated: boolean;
  authenticate: (username: string, password: string) => Promise<boolean>;
  user: AuthContextUser;
  signout: () => void;
}
