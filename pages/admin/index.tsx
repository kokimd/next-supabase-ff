import { NextPage } from 'next';
import { AllJudgeResult } from '../../components/admin/AllJudgeResult';
import { JudgeResult } from '../../components/judge/JudgeResult';
import { Space } from '@mantine/core';
import { AdminLayout } from '../../components/layout/AdminLayout';

const Admin: NextPage = () => {
  return (
    <AdminLayout title='Admin'>
      <AllJudgeResult />
      <Space h={30} />
      <JudgeResult />
    </AdminLayout>
  );
};

export default Admin;
