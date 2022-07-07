import { useForm } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { supabase } from '../utils/supabase';

export const useAuth = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const authForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn(authForm.values);
    if (error) {
      setError(error.message);
    }
    console.log(user);
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

  return { error, authForm, login, register, logOut };
};
