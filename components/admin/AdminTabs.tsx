import { FC } from 'react';
import { Space, Tabs } from '@mantine/core';
import { AdminMembers } from './members/AdminMembers/AdminMembers';
import { JudgeResult } from '../judge/JudgeResult';
import { JudgeLogs } from './JudgeLogs';
import { AllJudgeResult } from './AllJudgeResult';

export const AdminTabs: FC = () => {
  return (
    <Tabs className='mx-auto p-4 md:p-8' tabPadding='xl' variant='pills'>
      <Tabs.Tab
        label='参加者一覧・編集'
        className='w-1/3 rounded-md text-xs font-bold md:text-lg'
      >
        <AdminMembers />
      </Tabs.Tab>

      <Tabs.Tab
        label='ログ出力'
        className='w-1/4 text-xs  font-bold md:text-lg'
      >
        <JudgeResult />
        <Space h={20} />
        <JudgeLogs />
      </Tabs.Tab>
      <Tabs.Tab
        label='審査結果'
        className='w-1/4 rounded-md text-xs font-bold md:text-lg'
      >
        <AllJudgeResult />
      </Tabs.Tab>
    </Tabs>
  );
};
