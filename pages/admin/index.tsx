import { NextPage } from 'next';
import React from 'react';
import { AdminTabs } from '../../components/admin/AdminTabs';
import { DefaultLayout } from '../../components/layout/DefaultLayout';

const Admin: NextPage = () => {
  return (
    <DefaultLayout title='Admin'>
      <div className='w-full md:w-5/6'>
        <AdminTabs />
      </div>
    </DefaultLayout>
  );
};

export default Admin;
