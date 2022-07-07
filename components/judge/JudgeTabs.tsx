import { FC } from 'react';
import { Tabs } from '@mantine/core';
import { JudgeForm } from './JudgeForm';
import { JudgeResult } from './JudgeResult';
import { MemberList } from './MemberList';

export const JudgeTabs: FC = () => {
  return (
    <Tabs className='mx-auto p-4 md:p-8' tabPadding='xl' variant='pills'>
      <Tabs.Tab
        label='審査'
        className='w-1/4 rounded-md text-xs font-bold md:text-lg'
      >
        <JudgeForm />
      </Tabs.Tab>
      <Tabs.Tab
        label='参加者一覧'
        className='w-1/3 text-xs font-bold md:text-lg'
      >
        <MemberList />
      </Tabs.Tab>
      <Tabs.Tab
        label='審査結果'
        className='w-1/3 text-xs  font-bold md:text-lg'
      >
        <JudgeResult />
      </Tabs.Tab>
    </Tabs>
  );
};
