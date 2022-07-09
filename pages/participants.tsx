import { NextPage } from 'next';
import React from 'react';
import { MemberList } from '../components/judge/MemberList';
import { DefaultLayout } from '../components/layout/DefaultLayout';

const Participants: NextPage = () => {
  return (
    <DefaultLayout title='参加者一覧'>
      <MemberList />
    </DefaultLayout>
  );
};

export default Participants;
