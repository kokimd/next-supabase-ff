import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { supabase } from '../utils/supabase';
import useStore from '../utils/store';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  const setSession = useStore((state) => state.setSession);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  return (
    <NotificationsProvider position='top-center' limit={2}>
      <Component {...pageProps} />
    </NotificationsProvider>
  );
}

export default MyApp;
