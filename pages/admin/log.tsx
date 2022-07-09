import { Space } from '@mantine/core';
import React from 'react';
import { JudgeLogs } from '../../components/admin/JudgeLogs';
import { JudgeResult } from '../../components/judge/JudgeResult';
import { AdminLayout } from '../../components/layout/AdminLayout';

const Log = () => {
  return (
    <AdminLayout title='ログ出力'>
      <JudgeResult />
      <Space h={30} />
      <JudgeLogs />
    </AdminLayout>
  );
};

export default Log;
