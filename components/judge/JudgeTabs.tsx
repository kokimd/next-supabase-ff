import { FC } from 'react';
import { Tabs } from '@mantine/core';
import { JudgeResult } from './JudgeResult';
import { AllJudgeResult } from '../admin/AllJudgeResult';

export const JudgeTabs: FC = () => {
  return (
    <Tabs className='mx-auto ' tabPadding='xl' variant='pills'>
      <Tabs.Tab label='全体' className='w-1/3 text-xs  font-bold md:text-lg'>
        <AllJudgeResult />
      </Tabs.Tab>
      <Tabs.Tab
        label={`ユーザー別`}
        className='w-1/3 text-xs  font-bold md:text-lg'
      >
        <JudgeResult />
      </Tabs.Tab>
    </Tabs>
  );
};
