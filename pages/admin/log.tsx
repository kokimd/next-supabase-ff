import { NextPage } from 'next';
import { Space } from '@mantine/core';
import { JudgeLogs } from '../../components/admin/JudgeLogs';
import { JudgeResult } from '../../components/judge/JudgeResult';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { useQueryParticipants } from '../../hooks/useQueryParticipants';

const Log: NextPage = () => {
  const { data } = useQueryParticipants();

  console.log(data);

  return (
    <AdminLayout title='ログ出力'>
      <JudgeResult />
      <Space h={30} />
      <JudgeLogs />
    </AdminLayout>
  );
};

export default Log;
