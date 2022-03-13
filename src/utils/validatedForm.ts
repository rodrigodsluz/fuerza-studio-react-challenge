import { toast } from 'react-toastify';

/**
 * @export
 * @component
 * @name validatedForm
 *
 * @description
 * validatedForm
 */
const validatedForm = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  if (!username.trim().length || !password.trim().length) {
    if (!username.trim().length) {
      toast.warning('The username is required!');
    }

    if (!password.trim().length) {
      toast.warning('The password is required!');
    }

    return false;
  }
  return true;
};

export default validatedForm;
