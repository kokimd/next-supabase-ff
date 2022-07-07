import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import useStore from '../../utils/store';

type Props = {
  title: string;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ title, children }) => {
  const { logOut } = useAuth();
  const session = useStore((state) => state.session);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>{title}</Head>
      <header className='container flex h-16 w-full items-center justify-center md:h-20 md:justify-start'>
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
      <main className='flex w-screen flex-1 flex-col items-center bg-blue-100'>
        {children}
      </main>
    </div>
  );
};
