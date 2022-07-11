import { useForm } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { supabase } from '../utils/supabase';
import { Users } from '../utils/users';

type User =
  | 'admin01'
  | 'judge01'
  | 'judge02'
  | 'judge03'
  | 'judge04'
  | 'judge05';

export const useAuth = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const authForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const getUsername = (email: string | undefined) => {
    let user: User;
    if (email) {
      user = email.substring(0, email.indexOf('@')) as User;
      const username = Users[user];

      return username;
    }
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn(authForm.values);
    if (error) {
      setError(error.message);
    }
  };

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp(authForm.values);
    if (error) {
      setError(error.message);
    }
  };

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
      return;
    }
    router.push('/');
  };

  return { error, authForm, login, register, logOut, getUsername };
};
