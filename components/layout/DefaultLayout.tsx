import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import useStore from '../../utils/store';
import { Group, Space, Text } from '@mantine/core';
import { UtilLink } from '../util/UtilLink';

type Props = {
  title: string;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ title, children }) => {
  const { logOut, getUsername } = useAuth();
  const session = useStore((state) => state.session);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>{title}</title>
      </Head>
      <header className='container flex h-16 w-full items-center justify-center px-4 md:h-20 md:justify-start'>
        <Link href='/'>
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
              ログアウト
            </button>
          )}
        </div>
      </header>
      <main className='flex min-h-full w-screen flex-1 flex-col items-center bg-blue-100 px-4 py-12 md:px-0'>
        <div className='w-full md:w-5/6'>
          {session && (
            <>
              <Group position='right' mb={20}>
                <Text
                  weight={800}
                  size='md'
                  className='rounded-full bg-white py-2 px-4 text-purple-500'
                >
                  {getUsername(session.user?.email)}
                </Text>
              </Group>
              <Group className='flex'>
                <UtilLink path='/'>参加者一覧</UtilLink>
                <UtilLink path='/judge'>審査</UtilLink>
                <UtilLink path='/result'>審査結果</UtilLink>
              </Group>
              <Space h={30} />
            </>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};
