import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { supabase } from '../utils/supabase';
import useStore from '../utils/store';

function MyApp({ Component, pageProps }: AppProps) {
  const setSession = useStore((state) => state.setSession);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  return <Component {...pageProps} />;
}

export default MyApp;
