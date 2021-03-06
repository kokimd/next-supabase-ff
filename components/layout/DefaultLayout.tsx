import { FC, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import useStore from '../../utils/store';
import { Group, Loader, Space, Text } from '@mantine/core';
import { UtilLink } from '../util/UtilLink';
import { Logout } from 'tabler-icons-react';
import { useValidateSession } from '../../hooks/util/useValidateSession';

type Props = {
  title: string;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ title, children }) => {
  const { logOut, getUsername } = useAuth();
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
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,maximum-scale=1.0'
        />
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
              <Logout size={24} />
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
          {standBy ? (
            children
          ) : (
            <div className='flex min-h-full items-center justify-center'>
              <Loader />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
