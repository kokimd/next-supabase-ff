import { NextPage } from 'next';
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { DefaultLayout } from '../components/layout/DefaultLayout';

const Login: NextPage = () => {
  return (
    <DefaultLayout title='ログイン'>
      <LoginForm />
    </DefaultLayout>
  );
};

export default Login;
