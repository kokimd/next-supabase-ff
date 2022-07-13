import { NextPage } from 'next';
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { MemberList } from '../components/judge/MemberList';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import useStore from '../utils/store';

const Home: NextPage = () => {
  const session = useStore((state) => state.session);

  return (
    <DefaultLayout title={session ? '参加者一覧' : 'ログイン'}>
      {session ? <MemberList /> : <LoginForm />}
    </DefaultLayout>
  );
};

export default Home;
