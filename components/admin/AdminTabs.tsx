import { FC } from 'react';
import { Tabs } from '@mantine/core';
import { AdminMembers } from './members/AdminMembers/AdminMembers';

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
        label='審査結果・ログ出力'
        className='w-1/3 text-xs  font-bold md:text-lg'
      >
        a
      </Tabs.Tab>
    </Tabs>
  );
};
