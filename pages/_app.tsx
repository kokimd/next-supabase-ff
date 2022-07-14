import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import useStore from '../utils/store';
import { useRouter } from 'next/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const setSession = useStore((state) => state.setSession);
  const router = useRouter();

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    if (!supabase.auth.session()) router.push('/');
  }, [setSession]);

  return (
    <NotificationsProvider position='bottom-right' limit={2}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </NotificationsProvider>
  );
}

export default MyApp;
