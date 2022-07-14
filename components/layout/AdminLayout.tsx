import { FC, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useStore from '../../utils/store';
import { useAuth } from '../../hooks/useAuth';
import { Group, Loader, Space } from '@mantine/core';
import { UtilLink } from '../util/UtilLink';
import { Logout } from 'tabler-icons-react';
import { useValidateSession } from '../../hooks/util/useValidateSession';

type Props = {
  title: string;
  children: ReactNode;
};

export const AdminLayout: FC<Props> = ({ title, children }) => {
  const { logOut } = useAuth();
  const session = useStore((state) => state.session);
  const standBy = useStore((state) => state.standBy);
  const { pushToLogin } = useValidateSession();

  useEffect(() => {
    pushToLogin();
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>ポムコレ | {title}</title>
      </Head>
      <header className='container flex h-16 w-full items-center justify-center px-4 md:h-20 md:justify-start'>
        <Link href='/admin'>
          <a className='font-mono text-xl font-bold text-black  no-underline md:text-3xl'>
            ポムコレ
          </a>
        </Link>
        <div className='ml-auto'>
          {session && (
            <button
              className='cursor-pointer rounded-md border-none bg-red-500 py-2 px-2 text-sm  font-semibold text-white md:px-4 md:text-sm md:font-bold'
              onClick={logOut}
            >
              {<Logout size={24} />}
            </button>
          )}
        </div>
      </header>
      <main className='flex min-h-full w-screen flex-1 flex-col items-center bg-blue-100 px-4 py-12 md:px-0'>
        <div className='w-full md:w-5/6'>
          {session && (
            <>
              <Group className='flex'>
                <UtilLink path='/admin'>審査結果</UtilLink>
                <UtilLink path='/admin/log'>ログ出力</UtilLink>
                <UtilLink path='/admin/participants'>参加者一覧</UtilLink>
              </Group>
              <Space h={30} />
            </>
          )}
          {standBy ? (
            children
          ) : (
            <div className='flex min-h-full items-center justify-center'>
              <Loader />
            </div>
          )}{' '}
        </div>
      </main>
    </div>
  );
};
